import { network, ethers } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTokens: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const chainId = network.config.chainId;

  await deploy("NFTree", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  let resolverAddress;
  let donationResolver;
  let erc6551Registry;
  let erc6551RegistryAddress;
  let erc6551Account;
  let erc6551AccountAddress;
  if (developmentChains.includes(network.name)) {
    donationResolver = await ethers.getContract("DonationEASResolver");
    resolverAddress = donationResolver.address;
    erc6551Account = await ethers.getContract("Account");
    erc6551AccountAddress = erc6551Account.address;
    erc6551Registry = await ethers.getContract("ERC6551Registry");
    erc6551RegistryAddress = erc6551Registry.address;
  } else if (network.name == "sepolia" && chainId) {
    resolverAddress = networkConfig[chainId]["donationResolverAddress"];
    if (!resolverAddress) {
      throw new Error("No donation resolver address configured for this network.");
    }
    donationResolver = await ethers.getContractAt("DonationEASResolver", resolverAddress);
    erc6551AccountAddress = networkConfig[chainId]["erc6551AccountImplAddress"];
    erc6551RegistryAddress = networkConfig[chainId]["erc6551RegistryAddress"];
    if (!erc6551AccountAddress || !erc6551RegistryAddress) {
      throw new Error("No ERC-6551 addresses configured on this network");
    }
  } else {
    throw new Error("No EAS resolver configured for this network.");
  }

  await deploy("HabitatNFT", {
    from: deployer,
    // Contract constructor arguments
    args: [resolverAddress, erc6551RegistryAddress, erc6551AccountAddress],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  const habitatNFT = await ethers.getContract("HabitatNFT");
  await donationResolver.setHabitatNFT(habitatNFT.address);

  const nftree = await ethers.getContract("NFTree");
  await habitatNFT.setNFTree(nftree.address);
  await nftree.setHabitatNFT(habitatNFT.address);

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployTokens;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTokens.tags = ["Tokens"];
