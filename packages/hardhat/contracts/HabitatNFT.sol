// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./SingleOwnershipSoulbound.sol";

contract HabitatNFT is SingleOwnershipSoulbound {
    string public baseURI;

    constructor(string memory _baseURI) SingleOwnershipSoulbound("Habitat NFT", "HAB") {
        baseURI = _baseURI;
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overridden in child contracts.
     */
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}