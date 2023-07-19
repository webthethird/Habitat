// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@ethereum-attestation-service/eas-contracts/contracts/resolver/SchemaResolver.sol";
import "@ethereum-attestation-service/eas-contracts/contracts/SchemaRegistry.sol";
import {IEAS, Attestation} from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import "./HabitatNFT.sol";

contract DonationEASResolver is Ownable, SchemaResolver {
    string public constant schema = "address donation_to,address donation_from,bytes32 donation_tx,uint256 donation_val";
    bytes32 public immutable schemaUID;

    HabitatNFT public habitatNFT;

    event NewDonation(address to, address from, uint256 value, bytes32 tx_hash);

    constructor(IEAS eas, ISchemaRegistry registry, address _habitat) SchemaResolver(eas) Ownable() {
        habitatNFT = HabitatNFT(_habitat);
        schemaUID = registry.register(schema, this, false);
    }

    function setHabitatNFT(address _habitat) public onlyOwner {
        habitatNFT = HabitatNFT(_habitat);
    }

    function onAttest(Attestation calldata attestation, uint256 /*value*/) internal override returns (bool) {
        (address donation_to, address donation_from, bytes32 donation_tx, uint256 donation_value) = abi.decode(attestation.data, (address, address, bytes32, uint256));
        emit NewDonation(donation_to, donation_from, donation_value, donation_tx);
        habitatNFT.grantGreenPoints(donation_from, donation_value * 100);
        return true;
    }

    function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
        return true;
    }
}