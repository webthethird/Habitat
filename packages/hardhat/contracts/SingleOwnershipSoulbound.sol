pragma solidity ^0.8.0;

import "./ERC721Soulbound.sol";

contract SingleOwnershipSoulbound is ERC721Soulbound {
    constructor(string memory _name, string memory _symbol) ERC721Soulbound(_name, _symbol) {}

    modifier ifNoBalance(address sender) {
        require(
            ERC721.balanceOf(sender) == 0,
            "ERC721Soulbound: Sender already owns a souldbound token"
        );
        _;
    }

    function mint() public virtual override ifNoBalance(_msgSender()) {
        super.mint();
    }
}