import { expect } from "chai";
import { ethers, network } from "hardhat";
import {
  EAS,
  SchemaRegistry,
  DonationEASResolver,
  HabitatNFT,
  NFTree,
  ERC6551Registry,
  EntryPoint,
  AccountGuardian,
  Account,
} from "../typechain-types";
import {
  AttestationRequestStruct,
  AttestationRequestDataStruct,
} from "../typechain-types/@ethereum-attestation-service/eas-contracts/contracts/EAS";
import { address } from "../lib/account-abstraction/test/solidityTypes";
import { BigNumber, ContractReceipt } from "ethers";
import { SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { TransactionResponse } from "@ethersproject/providers";

describe("Habitat", function () {
  let eas: EAS;
  let schemaRegistry: SchemaRegistry;
  let donationResolver: DonationEASResolver;
  let erc6551Registry: ERC6551Registry;
  let entryPoint: EntryPoint;
  let guardian: AccountGuardian;
  let accountImpl: Account;
  let habitatNFT: HabitatNFT;
  let nftree: NFTree;
  let ownerAddress: address;

  before(async () => {
    const [owner] = await ethers.getSigners();
    ownerAddress = owner.address;
    // Deploy EAS protocol contracts
    const schemaRegistryFactory = await ethers.getContractFactory("SchemaRegistry", owner);
    schemaRegistry = (await schemaRegistryFactory.deploy()) as SchemaRegistry;
    await schemaRegistry.deployed();
    const easFactory = await ethers.getContractFactory("EAS", owner);
    eas = (await easFactory.deploy(schemaRegistry.address)) as EAS;
    await eas.deployed();
    // Deploy DonationEASResolver (will need to update HabitatNFT address later)
    const donationResolverFactory = await ethers.getContractFactory("DonationEASResolver", owner);
    donationResolver = (await donationResolverFactory.deploy(
      eas.address,
      schemaRegistry.address,
      "0x59c371F978e3D554071cCf290eD9B15c15Df2D8B",
    )) as DonationEASResolver;
    await donationResolver.deployed();
    // Deploy ERC-6551 contracts
    const entryPointFactory = await ethers.getContractFactory("EntryPoint", owner);
    entryPoint = (await entryPointFactory.deploy()) as EntryPoint;
    await entryPoint.deployed();
    const accountGuardianFactory = await ethers.getContractFactory("AccountGuardian", owner);
    guardian = (await accountGuardianFactory.deploy()) as AccountGuardian;
    await guardian.deployed();
    const accountImplFactory = await ethers.getContractFactory("Account", owner);
    accountImpl = (await accountImplFactory.deploy(guardian.address, entryPoint.address)) as Account;
    await accountImpl.deployed();
    const erc6551RegistryFactory = await ethers.getContractFactory("ERC6551Registry", owner);
    erc6551Registry = (await erc6551RegistryFactory.deploy()) as ERC6551Registry;
    await erc6551Registry.deployed();
    // Deploy Habitat contracts
    const habitatNFTFactory = await ethers.getContractFactory("HabitatNFT", owner);
    habitatNFT = (await habitatNFTFactory.deploy(
      donationResolver.address,
      erc6551Registry.address,
      accountImpl.address,
    )) as HabitatNFT;
    await habitatNFT.deployed();
    const nftreeFactory = await ethers.getContractFactory("NFTree", owner);
    nftree = (await nftreeFactory.deploy()) as NFTree;
    await nftree.deployed();
    // Set up dependencies between contracts
    await donationResolver.setHabitatNFT(habitatNFT.address);
    await habitatNFT.setNFTree(nftree.address);
    await nftree.setHabitatNFT(habitatNFT.address);
  });

  describe("Deployment", function () {
    it("Should have the correct owner for all Habitat contracts", async function () {
      expect(await habitatNFT.owner()).to.equal(ownerAddress);
      expect(await nftree.owner()).to.equal(ownerAddress);
      expect(await donationResolver.owner()).to.equal(ownerAddress);
    });

    it("Should have the correct dependencies between contracts", async function () {
      expect(await habitatNFT.nftree()).to.equal(nftree.address);
      expect(await habitatNFT.donationResolver()).to.equal(donationResolver.address);
      expect(await nftree.habitat()).to.equal(habitatNFT.address);
      expect(await donationResolver.habitatNFT()).to.equal(habitatNFT.address);
      expect(await eas.getSchemaRegistry()).to.equal(schemaRegistry.address);
      expect(await accountImpl.guardian()).to.equal(guardian.address);
      expect(await accountImpl._entryPoint()).to.equal(entryPoint.address);
    });
  });

  describe("Ownership", function () {
    it("Should not allow a user to change the Habitat dependencies", async function () {
      const [_, user] = await ethers.getSigners();
      await expect(nftree.connect(user).setHabitatNFT(user.address)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
      await expect(donationResolver.connect(user).setHabitatNFT(user.address)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
      await expect(habitatNFT.connect(user).setNFTree(user.address)).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
    });

    it("Should allow the owner to change the Habitat dependencies", async function () {
      const [owner] = await ethers.getSigners();
      const newNFTree = await (await ethers.getContractFactory("NFTree")).deploy();
      await newNFTree.deployed();
      await habitatNFT.connect(owner).setNFTree(newNFTree.address);
      expect(await habitatNFT.nftree()).to.equal(newNFTree.address);
      const newHabitatNFT = await (
        await ethers.getContractFactory("HabitatNFT")
      ).deploy(donationResolver.address, erc6551Registry.address, accountImpl.address);
      await newHabitatNFT.deployed();
      await donationResolver.connect(owner).setHabitatNFT(newHabitatNFT.address);
      expect(await donationResolver.habitatNFT()).to.equal(newHabitatNFT.address);
      await nftree.connect(owner).setHabitatNFT(newHabitatNFT.address);
      expect(await nftree.habitat()).to.equal(newHabitatNFT.address);
      // Change it back to the original one
      await donationResolver.connect(owner).setHabitatNFT(habitatNFT.address);
      expect(await donationResolver.habitatNFT()).to.equal(habitatNFT.address);
      await nftree.connect(owner).setHabitatNFT(habitatNFT.address);
      expect(await nftree.habitat()).to.equal(habitatNFT.address);
      await habitatNFT.connect(owner).setNFTree(nftree.address);
    });
  });

  describe("HabitatNFT", function () {
    let userAddress: address;
    let mintReceipt: ContractReceipt;

    before(async function () {
      const [_, user] = await ethers.getSigners();
      userAddress = user.address;
      // Mint an NFT
      mintReceipt = await (await habitatNFT.connect(user).mint()).wait();
    });

    it("Should allow the user to mint a HabitatNFT", async function () {
      expect(await habitatNFT.balanceOf(userAddress)).to.equal(1);
      expect(await habitatNFT.ownerOf(0)).to.equal(userAddress);
    });

    it("Should emit a Transfer event when minting", async function () {
      expect(mintReceipt).to.not.equal(undefined);
      if (mintReceipt.events) {
        const { args, event } = mintReceipt.events[0];
        expect(args).to.not.equal(undefined);
        if (args) {
          expect(args.from).to.equal("0x0000000000000000000000000000000000000000");
          expect(args.to).to.equal(userAddress);
          expect(args.tokenId).to.equal(0);
          expect(event).to.equal("Transfer");
        }
      }
    });

    it("Should not allow the user to mint more than 1 NFT", async function () {
      const [_, user] = await ethers.getSigners();
      expect(habitatNFT.connect(user).mint()).to.be.revertedWith(
        "ERC721Soulbound: Sender already owns a souldbound token",
      );
      expect(await habitatNFT.balanceOf(userAddress)).to.equal(1);
    });

    it("Should create a token-bound account for the HabitatNFT", async function () {
      const tokenAccountAddress = await habitatNFT.erc6551Accounts(0);
      const tokenAccount = (await ethers.getContractAt("Account", tokenAccountAddress)) as Account;
      const chainId = network.config.chainId ? network.config.chainId : 31337;
      const accountFromRegistry = await erc6551Registry.account(accountImpl.address, chainId, habitatNFT.address, 0, 0);
      expect(tokenAccount.address).to.equal(accountFromRegistry);
      const [chainId_, tokenContract_, tokenId_] = await tokenAccount.token();
      expect(chainId_).to.equal(BigNumber.from(chainId));
      expect(tokenContract_).to.equal(habitatNFT.address);
      expect(tokenId_).to.equal(BigNumber.from(0));
      expect(await tokenAccount.owner()).to.equal(userAddress);
    });

    it("Should not allow user to transfer their NFT", async function () {
      const [, user, user2] = await ethers.getSigners();
      expect(habitatNFT.connect(user).transferFrom(user.address, user2.address, 0)).to.be.revertedWith("ERC721Soulbound: Token has already been soulbound");
    });
  });

  describe("Attestation", function () {
    let userAddress: address;
    let txResponse: TransactionResponse;
    let txHash: string;
    let encodedData: string;
    let schemaUID: string;
    let attestationRequest: AttestationRequestStruct;
    let attestationRequestData: AttestationRequestDataStruct;

    const schema = "address donation_to,address donation_from,bytes32 donation_tx,uint256 donation_val";
    const schemaEncoder = new SchemaEncoder(schema);

    before(async () => {
      const [_, __, user] = await ethers.getSigners();
      userAddress = user.address;
      // Send donation from the user
      txResponse = await user.sendTransaction({
        to: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C",
        value: ethers.utils.parseEther("0.1"),
      });
      txHash = txResponse.hash;
      // Prepare encoded data for attestation
      schemaUID = await donationResolver.schemaUID();
      encodedData = schemaEncoder.encodeData([
        { name: "donation_to", value: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C", type: "address" },
        { name: "donation_from", value: userAddress, type: "address" },
        {
          name: "donation_tx",
          value: txHash,
          type: "bytes32",
        },
        { name: "donation_val", value: ethers.utils.parseEther("0.1"), type: "uint256" },
      ]);
      attestationRequestData = {
        recipient: userAddress,
        data: encodedData,
        expirationTime: 0,
        refUID: ethers.utils.hexZeroPad(ethers.utils.hexlify(0), 32),
        revocable: false,
        value: 0,
      } as AttestationRequestDataStruct;
      attestationRequest = {
        schema: schemaUID,
        data: attestationRequestData,
      } as AttestationRequestStruct;
    });

    it("Should not allow users to create a donation attestation without a HabitatNFT", async function () {
      const [_, __, user] = await ethers.getSigners();
      expect(eas.connect(user).attest(attestationRequest)).to.be.revertedWith("Recipient must own a Habitat NFT");
    });

    it("Should create an attestation once the user has a HabitatNFT", async function () {
      const [_, __, user] = await ethers.getSigners();
      await habitatNFT.connect(user).mint();
      const attestTx = await eas.connect(user).attest(attestationRequest);
      const attestReceipt = await attestTx.wait();
      expect(attestReceipt.events).to.not.equal(undefined);
      if (attestReceipt.events && attestReceipt.events.length > 0) {
        const attestUID = attestReceipt.events[0].args ? attestReceipt.events[0].args[2] : 0;
        expect(attestUID).to.not.equal(undefined);
        const attestation = await eas.getAttestation(attestUID);
        expect(attestation.recipient).to.equal(userAddress);
      }
    });

    it("Should grant 10 green points to the user", async function () {
      const greenPoints = await habitatNFT.greenPoints(userAddress);
      expect(greenPoints).to.equal(ethers.utils.parseEther("10"));
    });

    it("Should only allow the DonationEASResolver to grant green points", async function () {
      const [owner, user] = await ethers.getSigners();
      expect(
        habitatNFT.connect(owner).grantGreenPoints(owner.address, ethers.utils.parseEther("10")),
      ).to.be.revertedWith("Only registered EAS Resolver allowed");
      expect(habitatNFT.connect(user).grantGreenPoints(user.address, ethers.utils.parseEther("10"))).to.be.revertedWith(
        "Only registered EAS Resolver allowed",
      );
    });
  });

  describe("NFTree", function () {
    let userAddress: address;

    // This is not ideal... need to make some way of storing all the possible tree SVGs on-chain and letting users pick one to mint
    const treeSVG = `<path d="M644.711 506.225V376.003C644.711 369.104 639.7 363.511 633.518 363.511H627.137C620.955 363.511 615.944 369.104 615.944 376.003V506.225H644.711Z" fill="#7C4D29"/>
    <path opacity="0.6" d="M644.711 482.168V373.897C644.711 368.161 639.7 363.511 633.518 363.511H627.137C620.955 363.511 615.944 368.161 615.944 373.897V482.167H644.711V482.168Z" fill="#56331B"/>
    <path d="M699.655 449.213C699.655 459.701 691.266 468.206 680.918 468.206H579.737C569.389 468.206 561 459.701 561 449.213V407.432C561 396.943 569.389 388.441 579.737 388.441H680.918C691.266 388.441 699.655 396.943 699.655 407.432V449.213Z" fill="#65AD18"/>
    <path d="M680.918 388.441H579.737C569.389 388.441 561 396.943 561 407.432V427.689C561 438.178 569.389 446.682 579.737 446.682H680.918C691.266 446.682 699.655 438.178 699.655 427.689V407.432C699.655 396.943 691.266 388.441 680.918 388.441Z" fill="#7FC62E"/>
    <path d="M590.823 417.561C590.823 419.659 589.145 421.359 587.076 421.359H573.647C571.578 421.359 569.9 419.659 569.9 417.561C569.9 415.463 571.578 413.762 573.647 413.762H587.076C589.145 413.762 590.823 415.464 590.823 417.561Z" fill="#A5E84D"/>
    <path d="M607.687 435.286C607.687 437.384 606.009 439.085 603.94 439.085H590.512C588.443 439.085 586.765 437.384 586.765 435.286C586.765 433.189 588.443 431.488 590.512 431.488H603.94C606.009 431.488 607.687 433.19 607.687 435.286Z" fill="#A5E84D"/>
    <path d="M658.98 421.359C658.98 423.457 657.301 425.157 655.233 425.157H641.805C639.734 425.157 638.057 423.457 638.057 421.359C638.057 419.262 639.734 417.561 641.805 417.561H655.233C657.301 417.561 658.98 419.263 658.98 421.359Z" fill="#65AD18"/>
    <path d="M689.115 425.158C689.115 427.257 688.05 428.955 686.737 428.955H678.22C676.907 428.955 675.843 427.257 675.843 425.158C675.843 423.061 676.907 421.36 678.22 421.36H686.737C688.05 421.359 689.115 423.061 689.115 425.158Z" fill="#65AD18"/>
    <path d="M612.527 407.432C612.527 409.53 611.299 411.231 609.786 411.231H599.966C598.452 411.231 597.225 409.53 597.225 407.432C597.225 405.335 598.452 403.634 599.966 403.634H609.786C611.299 403.634 612.527 405.335 612.527 407.432Z" fill="#A5E84D"/>
    <path d="M688.256 369.076C688.256 379.566 679.867 388.069 669.519 388.069H591.136C580.788 388.069 572.399 379.565 572.399 369.076V344.388C572.399 333.899 580.788 325.396 591.136 325.396H669.519C679.867 325.396 688.256 333.899 688.256 344.388V369.076Z" fill="#65AD18"/>
    <path d="M669.519 325.396H591.136C580.788 325.396 572.399 333.899 572.399 344.388V347.553C572.399 358.041 580.788 366.544 591.136 366.544H669.519C679.867 366.544 688.256 358.041 688.256 347.553V344.388C688.256 333.899 679.867 325.396 669.519 325.396Z" fill="#7FC62E"/>
    <path d="M606.711 346.287C606.711 348.384 605.032 350.086 602.963 350.086H589.535C587.465 350.086 585.787 348.384 585.787 346.287C585.787 344.189 587.465 342.489 589.535 342.489H602.963C605.032 342.489 606.711 344.189 606.711 346.287Z" fill="#A5E84D"/>
    <path d="M674.867 350.086C674.867 352.184 673.188 353.884 671.12 353.884H657.691C655.621 353.884 653.944 352.184 653.944 350.086C653.944 347.988 655.622 346.287 657.691 346.287H671.12C673.189 346.287 674.867 347.987 674.867 350.086Z" fill="#65AD18"/>
    <path d="M628.415 336.157C628.415 338.255 627.187 339.957 625.674 339.957H615.854C614.341 339.957 613.114 338.255 613.114 336.157C613.114 334.061 614.341 332.359 615.854 332.359H625.674C627.187 332.359 628.415 334.061 628.415 336.157Z" fill="#A5E84D"/>
    <path d="M674.047 306.552C674.047 317.04 665.658 325.544 655.31 325.544H605.344C594.996 325.544 586.607 317.04 586.607 306.552V291.992C586.607 281.502 594.996 273 605.344 273H655.31C665.658 273 674.047 281.503 674.047 291.992V306.552Z" fill="#65AD18"/>
    <path d="M605.344 273C595.206 273 586.953 281.164 586.623 291.359C586.952 301.553 595.205 309.717 605.344 309.717H655.31C665.448 309.717 673.701 301.553 674.031 291.359C673.701 281.164 665.448 273 655.31 273H605.344Z" fill="#7FC62E"/>
    <path d="M635.792 294.207C635.792 296.304 634.114 298.005 632.045 298.005H618.617C616.548 298.005 614.87 296.304 614.87 294.207C614.87 292.109 616.548 290.409 618.617 290.409H632.045C634.114 290.409 635.792 292.109 635.792 294.207Z" fill="#A5E84D"/>
    <path d="M619.241 282.496C619.241 284.593 618.014 286.294 616.5 286.294H606.68C605.166 286.294 603.939 284.593 603.939 282.496C603.939 280.399 605.166 278.697 606.68 278.697H616.5C618.014 278.697 619.241 280.398 619.241 282.496Z" fill="#A5E84D"/>`

    before(async () => {
      const [_, __, user] = await ethers.getSigners();
      userAddress = user.address;
    });

    it("Should allow the user to mint an NFTree to their Habitat's account", async function () {
      const [_, __, user] = await ethers.getSigners();
      const chainId = network.config.chainId ? network.config.chainId : 31337;
      const greenPoints = await habitatNFT.greenPoints(userAddress);
      const habitatId = await habitatNFT.tokenOfOwnerByIndex(userAddress, 0);
      const habitatAccount = await erc6551Registry.account(
        accountImpl.address,
        chainId,
        habitatNFT.address,
        habitatId,
        0
      );
      expect(greenPoints).to.equal(ethers.utils.parseEther("10"));
      await nftree.connect(user).mint(treeSVG, habitatId);
      // NFTree is minted to the HabitatNFT's tokenbound account
      const treeBalanceUser = await nftree.balanceOf(userAddress)
      expect(treeBalanceUser).to.equal(0);
      const treeBalanceHabitat = await nftree.balanceOf(habitatAccount);
      expect(treeBalanceHabitat).to.equal(1);
    });

    it("Should burn the user's green points", async function () {
      // 10 green points are consumed
      const greenPoints = await habitatNFT.greenPoints(userAddress);
      expect(greenPoints).to.equal(0);
    });

    it("Should not allow the user to mint an NFTree without 10 green points", async function () {
      const [_, __, user] = await ethers.getSigners();
      const chainId = network.config.chainId ? network.config.chainId : 31337;
      const habitatId = await habitatNFT.tokenOfOwnerByIndex(userAddress, 0);
      const habitatAccount = await erc6551Registry.account(
        accountImpl.address,
        chainId,
        habitatNFT.address,
        habitatId,
        0
      );
      expect(nftree.connect(user).mint(treeSVG, habitatId)).to.be.revertedWith("Not enough green points to mint")
      const treeBalanceHabitat = await nftree.balanceOf(habitatAccount);
      expect(treeBalanceHabitat).to.equal(1);
    })
  });
});
