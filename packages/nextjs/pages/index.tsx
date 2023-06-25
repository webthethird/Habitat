import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { FC, useState } from 'react';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import { DonateButton } from "~~/components/scaffold-eth";


const WorldButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  // Comment these two lines out for fixing Worldcoin issue
  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action") ?? "";

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

  // Comment the entire return for WorldButton
  return (
    <IDKitWidget
      action={action}
      onSuccess={onSuccess}
      handleVerify={handleProof}
      app_id={app_id_key}
      credential_types={[CredentialType.Orb, CredentialType.Phone]}
    >
      {({ open }: { open: FC }) => <button style={buttonStyle} onClick={() => { open(); handleClick(); }}>Verify with World ID</button>}
    </IDKitWidget>
  );
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
    <button style={buttonStyle} onClick={handleClick}>
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
    <button style={buttonStyle} onClick={handleClick}>
      Mint NFTree
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

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-row flex-grow pt-10" data-theme="exampleUi">
        <div className="flex flex-col flex-grow">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <WorldButton />
            <MintButton />
            <DonateButton/>
            <MintTree />
            <Points/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

