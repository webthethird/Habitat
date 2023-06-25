import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { FC, useState } from 'react';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";

// const WorldButton = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//   };

//   const buttonStyle = {
//     width: '280px',
//     height: '70px',
//     boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
//     borderRadius: '45px',
//     marginLeft: '140px',
//     fontSize: '25px',
//     marginBottom: '20px',
//     backgroundColor: isClicked ? '#A5E84D' : '',
//   };

//   return (
//     <button style={buttonStyle} onClick={handleClick}>
//       Verify World ID
//     </button>
//   );
// };

{/* <IDKitWidget
  action={sample}
  onSuccess={onSuccess}
  handleVerify={handleProof}
  app_id={app_staging_6141658bf5b6a7d767b8247468dc1e38}
  credential_types={[CredentialType.Orb, CredentialType.Phone]}
  >
    {({ open }) => <button onClick={open}>Verify with World ID</button>}
  </IDKitWidget> */}


const WorldButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const action = urlParams.get("action") ?? "";

  const buttonStyle = {
    width: '280px',
    height: '70px',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '45px',
    marginLeft: '140px',
    fontSize: '25px',
    marginBottom: '20px',
    backgroundColor: isClicked ? '#A5E84D' : '',
  };

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



const DonateButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const buttonStyle = {
    width: '280px',
    height: '70px',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '45px',
    marginLeft: '140px',
    fontSize: '25px',
    marginBottom: '20px',
    backgroundColor: isClicked ? '#A5E84D' : '',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Donate
    </button>
  );
};


const MintButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const buttonStyle = {
    width: '280px',
    height: '70px',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '45px',
    marginLeft: '140px',
    fontSize: '25px',
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
    width: '280px',
    height: '70px',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '45px',
    marginLeft: '140px',
    fontSize: '25px',
    marginBottom: '20px',
    backgroundColor: isClicked ? '#A5E84D' : '',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Mint NFTree
    </button>
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
          {/* <IDKitWidget
            action={action}
            onSuccess={onSuccess}
            handleVerify={handleProof}
            app_id={app_id_key}
            credential_types={[CredentialType.Orb, CredentialType.Phone]}
          >
            {({ open }: {open: FC}) => <button onClick={open}>Verify with World ID</button>}
          </IDKitWidget> */}
          <WorldButton />
          <MintButton />
          <DonateButton />
          <MintTree />
        </div>
      </div>
    </>
  );
};

export default Home;

