pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./interfaces/IERC5192.sol";

contract ERC721Soulbound is ERC721Enumerable, IERC5192 {
    
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {

    }

    modifier ifUnlocked(uint256 tokenId) {
        require(
            !_exists(tokenId), 
            "ERC721Soulbound: Token has already been soulbound"
        );
        _;
    }

    function mint() public virtual {
        uint newId = totalSupply();
        _beforeTokenTransfer(address(0), _msgSender(), newId, 1);
        _safeMint(_msgSender(), newId);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) 
        public 
        view 
        virtual 
        override 
        returns (bool) 
    {
        return
            interfaceId == type(IERC5192).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function locked(uint256 tokenId) 
        external 
        view 
        returns (bool) 
    {
        return _exists(tokenId);
    }

    /**
     * @dev See {IERC721-transferFrom}.
     * @notice  Currently there is no way to unlock/transfer a soulbound token after it is minted
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721, IERC721) ifUnlocked(tokenId) {
        super.transferFrom(from, to, tokenId);
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override(ERC721, IERC721) ifUnlocked(tokenId) {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public virtual override(ERC721, IERC721) ifUnlocked(tokenId) {
        super.safeTransferFrom(from, to, tokenId, data);
    }

}