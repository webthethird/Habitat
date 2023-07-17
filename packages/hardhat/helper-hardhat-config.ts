import {ethers} from 'hardhat'

export interface networkConfigItem {
    name?: string
    easContractAddress?: string
    donationResolverAddress?: string
  }
  
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: "localhost",
    },
    11155111: {
        name: "sepolia",
        easContractAddress: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
        donationResolverAddress: "0x932C90f9C801535Fe1160921Ec4043AA7b64F75E",
    },
}

export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6
export const frontEndContractsFile = "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json"
export const frontEndAbiFile = "../nextjs-smartcontract-lottery-fcc/constants/abi.json"