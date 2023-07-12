import { useState } from "react";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";
import {
  useAccount,
  /* useNetwork, useSendTransaction, usePrepareSendTransaction, */
  useProvider,
} from "wagmi";
// import { hardhat, localhost, sepolia } from "wagmi/chains";
// import { BanknotesIcon } from "@heroicons/react/24/outline";
import {
  /* useAccountBalance, */
  useTransactor,
} from "~~/hooks/scaffold-eth";

// import { getLocalProvider } from "~~/utils/scaffold-eth";

// const NUM_OF_ETH = "1";

/**
 * Donate button which sends transaction from user metamask to giveDirectly.
 */
export const DonateButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { address } = useAccount();
  const provider = useProvider();
  // const { balance } = useAccountBalance(address);
  // const { chain: ConnectedChain } = useNetwork();
  const [loading, setLoading] = useState(false);
  const faucetTxn = useTransactor();
  const eas = new EAS("0xC2679fBD37d54388Ce493F1DB75320D236e1815e");
  eas.connect(provider);

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder(
    "address donation_from, address donation_to, bytes32 donation_tx, uint256 donation_value",
  );

  const sendETH = async () => {
    setIsClicked(true);
    try {
      setLoading(true);
      await faucetTxn({
        to: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C",
        value: ethers.utils.parseEther("0.01"),
      });
      setLoading(false);
      const encodedData = schemaEncoder.encodeData([
        { name: "donation_to", value: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C", type: "address" },
        { name: "donation_from", value: address ? address : "", type: "address" },
        {
          name: "donation_tx",
          value: "0x750EF1D7a0b4Ab1c97B7A623D7917CcEb5ea779C000000000000000000000000",
          type: "bytes32",
        },
        { name: "donation_value", value: ethers.utils.parseEther("0.01"), type: "uint256" },
      ]);
      const schemaUID = "0x3bb54e554f4bba20b4c98584863a60985e4e021536311c3cf1798b6158015979";
      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: address ? address.toString() : "",
          expirationTime: 0,
          revocable: true,
          data: encodedData,
        },
      });

      const newAttestationUID = await tx.wait();

      console.log("New attestation UID:", newAttestationUID);
    } catch (error) {
      console.error("⚡️ ~ file: FaucetButton.tsx:sendETH ~ error", error);
      setLoading(false);
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
        loading ? sendETH : console.log("Loading, please wait...");
      }}
    >
      Donate
    </button>
  );
};
