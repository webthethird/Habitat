export interface networkConfigItem {
  name?: string;
  easContractAddress?: string;
  schemaRegistryAddress?: string;
  donationResolverAddress?: string;
  erc6551RegistryAddress?: string;
  erc6551AccountImplAddress?: string;
}

export interface networkConfigInfo {
  [key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  31337: {
    name: "localhost",
  },
  11155111: {
    name: "sepolia",
    easContractAddress: "0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
    schemaRegistryAddress: "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0",
    donationResolverAddress: "0x932C90f9C801535Fe1160921Ec4043AA7b64F75E",
    erc6551RegistryAddress: "0x02101dfB77FDE026414827Fdc604ddAF224F0921",
    erc6551AccountImplAddress: "0x2d25602551487c3f3354dd80d76d54383a243358",
  },
};

export const developmentChains = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
export const frontEndContractsFile = "../nextjs-smartcontract-lottery-fcc/constants/contractAddresses.json";
export const frontEndAbiFile = "../nextjs-smartcontract-lottery-fcc/constants/abi.json";
