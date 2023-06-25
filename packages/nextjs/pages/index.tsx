import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import React, { useState } from 'react';

const WorldButton = () => {
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
      Verify World ID
    </button>
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



const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-row flex-grow pt-10" data-theme="exampleUi">
        <div className="flex flex-col flex-grow">
          {/* <button style={{width:'270px', height: '70px', boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)', borderRadius:'45px', marginLeft:'140px', fontSize:'25px', marginBottom:'20px'}}>World ID Sign In</button> */}
          <WorldButton />
          <MintButton />
          <DonateButton />
          <MintTree/>
          {/* <button style={{width:'270px', height: '70px', boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)', borderRadius:'45px', marginLeft:'140px', fontSize:'25px', marginBottom:'20px'}}>Log a Bike Ride</button>
          <button style={{width:'270px', height: '70px', boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)', borderRadius:'45px', marginLeft:'140px', fontSize:'25px', marginBottom:'20px'}}>Document Gardening</button>
          <button style={{width:'270px', height: '70px', boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)', borderRadius:'45px', marginLeft:'140px', fontSize:'25px', marginBottom:'20px'}}>Carpool to Work</button> */}

        </div>
        {/* <div className="bottom-div">
          <svg width="100%" height="100%" viewBox="0 0 379 575" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '-240px'}}>
            <path
              d="M289.805 574.999V252.609C289.805 235.527 275.959 221.681 258.879 221.681H241.254C224.173 221.681 210.326 235.527 210.326 252.609V574.999H289.805Z"
              fill="#7C4D29"
            />
            <path
              d="M266.972 373.72H141.344V162.404C141.344 151.777 132.732 143.165 122.108 143.165C111.482 143.165 102.872 151.777 102.872 162.404V392.959C102.872 401.914 109.003 409.421 117.293 411.565C118.836 411.96 120.442 412.198 122.108 412.198H266.972V373.72Z"
              fill="#7C4D29"
            />
            <g opacity="0.6">
              <path
                d="M289.805 313.595V252.609C289.805 235.527 275.959 221.681 258.879 221.681H241.254C224.173 221.681 210.326 235.527 210.326 252.609V313.595H289.805Z"
                fill="#56331B"
              />
              <path
                d="M141.344 352.419V162.404C141.344 151.777 132.732 143.165 122.108 143.165C111.482 143.165 102.872 151.777 102.872 162.404V352.419H141.344Z"
                fill="#56331B"
              />
            </g>
            <path
              d="M378.449 220.841C378.449 253.222 352.196 279.472 319.82 279.472H157.608C125.227 279.472 98.9766 253.222 98.9766 220.841V58.6289C98.9766 26.2503 125.227 0 157.608 0H319.82C352.198 0 378.449 26.2503 378.449 58.6289V220.841Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M188.387 71.3337C188.387 77.8073 183.137 83.0574 176.661 83.0574H134.644C128.168 83.0574 122.918 77.8073 122.918 71.3337C122.918 64.8548 128.168 59.6074 134.644 59.6074H176.663C183.137 59.6074 188.387 64.8548 188.387 71.3337Z"
              fill="#65AD18"
            />
            <path
              d="M319.818 0H157.606C125.225 0 98.9746 26.2503 98.9746 58.6289V73.3111H194.523C226.901 73.3111 253.152 99.5642 253.152 131.943V220.841H319.818C352.196 220.841 378.447 194.59 378.447 162.212V58.6289C378.45 26.2503 352.196 0 319.818 0Z"
              fill="#7FC62E"
            />
            <path
              opacity="0.4"
              d="M241.154 126.054C241.154 132.528 235.904 137.781 229.43 137.781H187.411C180.935 137.781 175.685 132.528 175.685 126.054C175.685 119.578 180.935 114.328 187.411 114.328H229.43C235.904 114.328 241.154 119.576 241.154 126.054Z"
              fill="#65AD18"
            />
            <path
              d="M322.259 180.775C322.259 187.246 317.009 192.501 310.532 192.501H268.513C262.037 192.501 256.787 187.249 256.787 180.775C256.787 174.296 262.037 169.049 268.513 169.049H310.532C317.009 169.051 322.259 174.299 322.259 180.775Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M256.301 40.0628C256.301 46.5364 252.461 51.7891 247.723 51.7891H216.997C212.259 51.7891 208.417 46.5364 208.417 40.0628C208.417 33.5866 212.259 28.3364 216.997 28.3364H247.723C252.461 28.3364 256.301 33.5866 256.301 40.0628Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M346.202 94.7834C346.202 101.26 342.363 106.51 337.627 106.51H306.899C302.161 106.51 298.321 101.257 298.321 94.7834C298.321 88.3072 302.161 83.0571 306.899 83.0571H337.627C342.36 83.0571 346.202 88.3072 346.202 94.7834Z"
              fill="#65AD18"
            />
            <path
              d="M221.416 279.293C221.416 304.944 200.618 325.742 174.964 325.742H46.4517C20.7973 325.742 0 304.944 0 279.293V150.778C0 125.123 20.7973 104.326 46.4517 104.326H174.964C200.618 104.326 221.416 125.123 221.416 150.778V279.293Z"
              fill="#65AD18"
            />
            <path
              d="M174.964 104.326H46.4517C20.7973 104.326 0 125.123 0 150.778V232.841C0 258.495 20.7973 279.293 46.4517 279.293H174.964C200.618 279.293 221.416 258.495 221.416 232.841V150.778C221.416 125.123 200.618 104.326 174.964 104.326Z"
              fill="#7FC62E"
            />
            <path
              opacity="0.4"
              d="M70.839 160.841C70.839 165.97 66.678 170.131 61.5492 170.131H28.2583C23.1269 170.131 18.9658 165.97 18.9658 160.841C18.9658 155.71 23.1269 151.551 28.2583 151.551H61.5465C66.678 151.551 70.839 155.71 70.839 160.841Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M112.643 204.197C112.643 209.326 108.482 213.487 103.353 213.487H70.0623C64.9335 213.487 60.7725 209.326 60.7725 204.197C60.7725 199.066 64.9335 194.907 70.0623 194.907H103.353C108.482 194.905 112.643 199.063 112.643 204.197Z"
              fill="#65AD18"
            />
            <path
              d="M176.899 247.553C176.899 252.679 172.741 256.84 167.609 256.84H134.321C129.19 256.84 125.031 252.681 125.031 247.553C125.031 242.419 129.192 238.26 134.321 238.26H167.609C172.741 238.258 176.899 242.416 176.899 247.553Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M124.643 136.067C124.643 141.196 121.6 145.357 117.848 145.357H93.5014C89.7491 145.357 86.7061 141.196 86.7061 136.067C86.7061 130.936 89.7464 126.777 93.5014 126.777H117.848C121.6 126.777 124.643 130.936 124.643 136.067Z"
              fill="#65AD18"
            />
            <path
              opacity="0.4"
              d="M195.868 179.423C195.868 184.551 192.825 188.712 189.073 188.712H164.729C160.977 188.712 157.934 184.551 157.934 179.423C157.934 174.291 160.977 170.133 164.729 170.133H189.073C192.825 170.13 195.868 174.289 195.868 179.423Z"
              fill="#65AD18"
            />
            <path
              opacity="0.6"
              d="M277.961 378.135C277.961 383.981 273.22 388.722 267.374 388.722C261.526 388.722 256.787 383.981 256.787 378.135V345.817C256.787 339.971 261.526 335.229 267.374 335.229C273.22 335.229 277.961 339.971 277.961 345.817V378.135Z"
              fill="#56331B"
            />
            <path
              opacity="0.6"
              d="M277.961 445.612C277.961 451.458 273.22 456.197 267.374 456.197C261.526 456.197 256.787 451.458 256.787 445.612V413.294C256.787 407.446 261.526 402.705 267.374 402.705C273.22 402.705 277.961 407.446 277.961 413.294V445.612Z"
              fill="#56331B"
            />
            <path
              opacity="0.6"
              d="M242.945 542.06C242.945 547.906 238.204 552.645 232.358 552.645C226.512 552.645 221.771 547.906 221.771 542.06V509.74C221.771 503.891 226.509 499.152 232.358 499.152C238.204 499.152 242.945 503.891 242.945 509.74V542.06Z"
              fill="#56331B"
            />
          </svg>
        </div> */}
      </div>
    </>
  );
};

export default Home;

