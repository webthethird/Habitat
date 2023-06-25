import { useState } from "react";
import { ethers } from "ethers";
import { useAccount, useNetwork } from "wagmi";
import { hardhat, localhost } from "wagmi/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useAccountBalance, useTransactor } from "~~/hooks/scaffold-eth";
import { getLocalProvider } from "~~/utils/scaffold-eth";

const NUM_OF_ETH = "1";

/**
 * Donate button which sends transaction from user metamask to giveDirectly.
 */
export const DonateButton = () => {
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
      await faucetTxn({ to: address, value: ethers.utils.parseEther(NUM_OF_ETH) });
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
    marginTop: '-330px',
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
