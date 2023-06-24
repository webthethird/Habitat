// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/// @title EIP-4883 Non-Fungible Token Standard
interface IERC4883 is IERC165 {
    function renderTokenById(uint256 id) external view returns (string memory);
}