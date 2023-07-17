import { network, ethers } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployEASResolver: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const chainId = network.config.chainId;

  if (developmentChains.includes(network.name)) {
    const schemaRegistry = await ethers.getContract("SchemaRegistry");
    const eas = await ethers.getContract("EAS");
    await deploy("DonationEASResolver", {
        from: deployer,
        // Contract constructor arguments
        args: [
            eas.address,
            schemaRegistry.address,
            "0x59c371F978e3D554071cCf290eD9B15c15Df2D8B"
        ],
        log: true,
        // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
        // automatically mining the contract deployment transaction. There is no effect on live networks.
        autoMine: true,
    });
  } else if (chainId) {
    // if (networkConfig[chainId]["donationResolverAddress"] || !networkConfig[chainId]["easContractAddress"]) {
    //     return
    // }
    await deploy("DonationEASResolver", {
        from: deployer,
        // Contract constructor arguments
        args: [
            networkConfig[chainId]["easContractAddress"],
            networkConfig[chainId]["schemaRegistryAddress"],
            "0x59c371F978e3D554071cCf290eD9B15c15Df2D8B"
        ],
        log: true,
        // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
        // automatically mining the contract deployment transaction. There is no effect on live networks.
        autoMine: true,
    });
  }

  // Get the deployed contract
  // const yourContract = await hre.ethers.getContract("YourContract", deployer);
};

export default deployEASResolver;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployEASResolver.tags = ["DonationResolver"];
