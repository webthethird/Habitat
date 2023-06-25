// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "./interfaces/IERC4883.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./HabitatNFT.sol";


contract NFTree is ERC721Enumerable, ERC721URIStorage, IERC4883 {
    HabitatNFT public habitat;

    constructor() ERC721("NFTree", "Tree") {
        
    }

    function setHabitatNFT(address _habitat) public {
        habitat = HabitatNFT(_habitat);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable, IERC165) returns (bool) {
        return interfaceId == type(IERC721Enumerable).interfaceId || interfaceId == type(IERC165).interfaceId || interfaceId == type(IERC4883).interfaceId || super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return ERC721URIStorage.tokenURI(tokenId);
    }

    function mint(string memory svg, uint256 habitatId) public virtual {
        uint256 newId = totalSupply();
        address hab_account = habitat.erc6551Accounts(habitatId);
        require(hab_account != address(0), "HabitatNFT with given ID has no account");

        _beforeTokenTransfer(address(0), hab_account, newId, 1);
        _mint(hab_account, newId);
        _setTokenURI(newId, svg);
    }

    function renderTokenById(uint256 id) external view override returns (string memory) {
        return ERC721URIStorage.tokenURI(id);
    }

    /**
     * @dev See {ERC721-_beforeTokenTransfer}.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override(ERC721, ERC721Enumerable) {
        ERC721Enumerable._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        ERC721URIStorage._burn(tokenId);
    }
}