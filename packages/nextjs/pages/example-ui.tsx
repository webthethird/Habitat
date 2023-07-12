import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { useState } from "react";
import { BigNumber, utils } from "ethers";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";


const ExampleUI: NextPage = () => {
    const { address } = useAccount();
    // const [visible, setVisible] = useState(true);
    const [newSVG, setNewSVG] = useState("");

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
            newSVG,
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

    return (
        <>
            <MetaHeader
                title="Example UI | Scaffold-ETH 2"
                description="Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features."
            >
                {/* We are importing the font this way to lighten the size of SE2. */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
            </MetaHeader>
            <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-10 lg:gap-12 w-full max-w-10xl my-0 ">
                    <div className="col-span-2 lg:col-span-3 flex flex-col gap-6">
                        <div className={`flex flex-col justify-center items-center bg-[length:100%_100%] py-10 px-5 sm:px-0 lg:py-auto max-w-[100vw] `}>
                            {baseSVG ? (<img width="100%" height="100%" src={`data:image/svg+xml;utf8,${encodeURIComponent(baseSVG)}`} />) : (<div></div>)}
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                        <div className="flex bg-base-300 relative pb-10">
                            <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
                                {baseId ?
                                    <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
                                        <span className="text-4xl sm:text-6xl text-black">Mint an NFTree</span>

                                        <span className="text-2xl sm:text-3xl text-green">You have {greenPoints ? (utils.formatEther(greenPoints.mul(100)))?.toString() : "0"} points</span>

                                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
                                            <input
                                                type="text"
                                                placeholder="Paste SVG here"
                                                className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
                                                onChange={e => setNewSVG(e.target.value)}
                                            />
                                            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
                                                <div className="flex rounded-full border-2 border-primary p-1">
                                                    <button
                                                        className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${isLoading ? "loading" : ""
                                                            }`}
                                                        onClick={mintTreeAsync}
                                                    >
                                                        {!isLoading && (
                                                            <>
                                                                Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
                                        <span className="text-4xl sm:text-6xl text-black">Mint a Habitat NFT</span>

                                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
                                            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
                                                <div className="flex rounded-full border-2 border-primary p-1">
                                                    <button
                                                        className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${isLoading ? "loading" : ""
                                                            }`}
                                                        onClick={mintHabitatAsync}
                                                    >
                                                        {!isLoading && (
                                                            <>
                                                                Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExampleUI;
