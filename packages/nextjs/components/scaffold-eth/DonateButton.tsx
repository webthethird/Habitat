import { useState } from "react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import invariant from "tiny-invariant";
import {
  useAccount,
  useNetwork,
  /* useSendTransaction, usePrepareSendTransaction, */
  useProvider,
  useSigner,
} from "wagmi";
// import { hardhat, localhost, sepolia } from "wagmi/chains";
// import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead, useTransactor } from "~~/hooks/scaffold-eth";
import { contracts } from "~~/utils/scaffold-eth/contract";

// import { getLocalProvider } from "~~/utils/scaffold-eth";

// const NUM_OF_ETH = "1";

/**
 * Donate button which sends transaction from user metamask to giveDirectly.
 */
export const DonateButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { address, status } = useAccount();
  const network = useNetwork();
  const { data: signer } = useSigner();
  const provider = useProvider();
  // const { balance } = useAccountBalance(address);
  // const { chain: ConnectedChain } = useNetwork();
  const [loading, setLoading] = useState(false);
  const faucetTxn = useTransactor();

  const easAddress =
    network.chain && contracts
      ? contracts[network.chain.id][0]["contracts"]["EAS"]
        ? contracts[network.chain.id][0]["contracts"]["EAS"].address
        : "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"
      : "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
  if (network.chain) {
    console.log("EAS contract address on %s: %s", network.chain.name, easAddress);
  } else {
    console.log("network.chain is undefined");
  }
  const eas = new EAS(easAddress);
  eas.connect(provider);

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(
    "address donation_to,address donation_from,bytes32 donation_tx,uint256 donation_val",
  );

  const { data: schemaUID } = useScaffoldContractRead({
    contractName: "DonationEASResolver",
    functionName: "schemaUID",
  });

  const sendETH = async () => {
    if (status !== "connected" || !address) {
      return;
    } else {
      invariant(signer, "signer must be defined");
      eas.connect(signer);
      invariant(schemaUID, "schema UID must be defined");

      setIsClicked(true);
      try {
        setLoading(true);
        const txResponse = await faucetTxn({
          to: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C",
          value: ethers.utils.parseEther("0.1"),
        });
        if (!txResponse) {
          console.log("Transaction errored or was canceled!");
          return;
        }
        const txHash = txResponse.hash;
        setLoading(false);
        const encodedData = schemaEncoder.encodeData([
          { name: "donation_to", value: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C", type: "address" },
          { name: "donation_from", value: address, type: "address" },
          {
            name: "donation_tx",
            value: txHash,
            type: "bytes32",
          },
          { name: "donation_val", value: ethers.utils.parseEther("0.1"), type: "uint256" },
        ]);

        const tx = await eas.attest({
          schema: schemaUID,
          data: {
            recipient: address,
            expirationTime: 0,
            revocable: false,
            data: encodedData,
          },
        });

        const newAttestationUID = await tx.wait();

        console.log("New attestation UID:", newAttestationUID);
      } catch (error) {
        console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
        setLoading(false);
      }
    }
  };

  const buttonStyle = {
    width: "300px",
    height: "70px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "45px",
    // margin: '27px',
    // marginTop: '-370px',
    fontSize: "25px",
    // marginBottom: '20px',
    backgroundColor: isClicked ? "#A5E84D" : "#FFFFFF",
  };

  //   // Render only on local chain
  //   if (!ConnectedChain || ConnectedChain.id !== hardhat.id) {
  //     return null;
  //   }

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        !loading ? sendETH() : console.log("Loading, please wait...");
      }}
    >
      Donate
    </button>
  );
};
