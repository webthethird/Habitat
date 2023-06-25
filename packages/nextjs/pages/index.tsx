import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { FC, useState } from 'react';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
// import { DonateButton } from "~~/components/scaffold-eth";
import { useAccount, useProvider, useNetwork } from "wagmi";
import { hardhat, localhost } from "wagmi/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead, useScaffoldContractWrite, useAccountBalance, useTransactor } from "~~/hooks/scaffold-eth";
import { BigNumber, utils } from "ethers";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { getLocalProvider } from "~~/utils/scaffold-eth";

const NUM_OF_ETH = "1";


const Home: NextPage = () => {
    const { address } = useAccount();
    const provider = useProvider();
    const [visible, setVisible] = useState(true);
    const [newSVG, setNewSVG] = useState("");
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isRightDirection, setIsRightDirection] = useState(false);
    const [marqueeSpeed, setMarqueeSpeed] = useState(0);

    const eas = new EAS("0xC2679fBD37d54388Ce493F1DB75320D236e1815e")
    eas.connect(provider)

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("address donation_from, address donation_to, bytes32 donation_tx, uint256 donation_value");
    // const encodedData = schemaEncoder.encodeData([
    //     { name: "eventId", value: 1, type: "uint256" },
    //     { name: "voteIndex", value: 1, type: "uint8" },
    // ]);

    const { data: baseId } = useScaffoldContractRead({
        contractName: "HabitatNFT",
        functionName: "tokenOfOwnerByIndex",
        args: [
            address,
            BigNumber.from(0)
        ]
    })

    const { data: baseSVG } = useScaffoldContractRead({
        contractName: "HabitatNFT",
        functionName: "renderTokenByOwner",
        args: [address]
    })

    const { writeAsync: mintTreeAsync, isLoading } = useScaffoldContractWrite({
        contractName: "NFTree",
        functionName: "mint",
        args: [
            `<path d="M644.711 506.225V376.003C644.711 369.104 639.7 363.511 633.518 363.511H627.137C620.955 363.511 615.944 369.104 615.944 376.003V506.225H644.711Z" fill="#7C4D29"/>
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
            <path d="M619.241 282.496C619.241 284.593 618.014 286.294 616.5 286.294H606.68C605.166 286.294 603.939 284.593 603.939 282.496C603.939 280.399 605.166 278.697 606.68 278.697H616.5C618.014 278.697 619.241 280.398 619.241 282.496Z" fill="#A5E84D"/>`,
            baseId
        ],
        // value: "0.01",
        onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
        },
    });

    const { writeAsync: mintHabitatAsync } = useScaffoldContractWrite({
        contractName: "HabitatNFT",
        functionName: "mint",
        // value: "0.01",
        onBlockConfirmation: txnReceipt => {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
            // setNewSVG()
        },
    });

    const { data: greenPoints } = useScaffoldContractRead({
        contractName: "HabitatNFT",
        functionName: "greenPoints",
        args: [address]
    })

    const WorldButton = () => {
        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(true);
        };

        // const urlParams = new URLSearchParams(window.location.search);
        // const action = urlParams.get("action") ?? "";

        const buttonStyle = {
            width: '300px',
            height: '70px',
            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '45px',
            margin: '27px',
            marginTop: '-370px',
            fontSize: '25px',
            backgroundColor: isClicked ? '#A5E84D' : '',
        };

        // return (
        //   <IDKitWidget
        //     action={action}
        //     onSuccess={onSuccess}
        //     handleVerify={handleProof}
        //     app_id={app_id_key}
        //     credential_types={[CredentialType.Orb, CredentialType.Phone]}
        //   >
        //     {({ open }: { open: FC }) => <button style={buttonStyle} onClick={() => { open(); handleClick(); }}>Verify with World ID</button>}
        //   </IDKitWidget>
        // );
    };


    const MintButton = () => {
        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(true);
        };

        const buttonStyle = {
            width: '300px',
            height: '70px',
            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '45px',
            marginTop: '-370px',
            fontSize: '25px',
            margin: '27px',
            marginBottom: '20px',
            backgroundColor: isClicked ? '#A5E84D' : '',
        };

        return (
            <button style={buttonStyle} onClick={mintHabitatAsync}>
                Mint Soulbound Token
            </button>
        );
    };

    const MintTree = () => {
        const [isClicked, setIsClicked] = useState(false);

        const handleClick = () => {
            setIsClicked(true);
        };

        const buttonStyle = {
            width: '300px',
            height: '70px',
            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '45px',
            marginTop: '-370px',
            fontSize: '25px',
            margin: '27px',
            marginBottom: '20px',
            backgroundColor: isClicked ? '#A5E84D' : '',
        };

        return (
            <button style={buttonStyle} onClick={mintTreeAsync}>
                Mint NFTree
            </button>
        );
    };

    const DonateButton = () => {
        const [isClicked, setIsClicked] = useState(false);
        const { address } = useAccount();
        const { balance } = useAccountBalance(address);
        const { chain: ConnectedChain } = useNetwork();
        const [loading, setLoading] = useState(false);
        const provider = getLocalProvider(localhost);
        const signer = provider?.getSigner();
        const faucetTxn = useTransactor(signer);
      
        const sendETH = async () => {
          setIsClicked(true);
          try {
            setLoading(true);
            await faucetTxn({ to: address, value: utils.parseEther(NUM_OF_ETH) });
            setLoading(false);
          } catch (error) {
            console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
            setLoading(false);
          }
        };
      
        const buttonStyle = {
          width: '300px',
          height: '70px',
          boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '45px',
          margin: '27px',
          marginTop: '-370px',
          fontSize: '25px',
          marginBottom: '20px',
          backgroundColor: isClicked ? '#A5E84D' : '',
        };
      
        // Render only on local chain
        if (!ConnectedChain || ConnectedChain.id !== hardhat.id) {
          return null;
        }
      
        return (
          <button style={buttonStyle} onClick={sendETH}>
              Donate
          </button>
        );
      };

    const Points = () => {

        const buttonStyle = {
            width: '300px',
            height: '70px',
            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '45px',
            marginTop: '-370px',
            fontSize: '25px',
            marginBottom: '20px',
            backgroundColor: '',
        };

        return (
            <div style={buttonStyle}>
                Points:
            </div>
        );
    };


    const handleProof = (result: ISuccessResult) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 3000);
            // NOTE: Example of how to decline the verification request and show an error message to the user
        });
    };

    const onSuccess = (result: ISuccessResult) => {
        console.log(result);
    };

    const app_id_key = "app_746b524e1d3b0eaf005e9c78835ec0d8";

    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-row flex-grow pt-10" data-theme="exampleUi">
                <div className="flex flex-col flex-grow">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <WorldButton />
                        <MintButton />
                        <DonateButton />
                        <MintTree />
                        <Points />
                    </div>
                </div>
            </div>
            <div className="col-span-2 lg:col-span-3 flex flex-col gap-6">
                <div className={`flex flex-col justify-center items-center bg-[length:100%_100%] py-0 px-5 sm:px-0 lg:py-auto max-w-[100vw] `}>
                    <img width="100%" height="100%" src={`data:image/svg+xml;utf8,${encodeURIComponent(baseSVG)}`} />
                </div>
            </div>
        </>
    );
};

export default Home;

