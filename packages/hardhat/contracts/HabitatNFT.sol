// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./SingleOwnershipSoulbound.sol";
import "./interfaces/IERC4883.sol";

contract HabitatNFT is SingleOwnershipSoulbound, IERC4883 {
    string public baseSVG;

    constructor(string memory _baseSVG) SingleOwnershipSoulbound("Habitat NFT", "HAB") {
        baseSVG = _baseSVG;
    }

    function renderTokenById(uint256 id) external view override returns (string memory) {
        // Shhhh, not used
        id; 
        return baseSVG;
    }
}
