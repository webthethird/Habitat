// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import "./SingleOwnershipSoulbound.sol";
import "./NFTree.sol";
import "./interfaces/IERC4883.sol";
import "./interfaces/IERC6551Registry.sol";

contract HabitatNFT is SingleOwnershipSoulbound, IERC4883 {
    IERC6551Registry private constant ERC_6551_REGISTRY = IERC6551Registry(0x02101dfB77FDE026414827Fdc604ddAF224F0921);
    address private constant ERC_6551_IMPL = 0x2D25602551487C3f3354dD80D76D54383A243358;
    NFTree public nftree;
    uint256 private immutable CHAIN = block.chainid;

    string public baseSVG;
    mapping(uint256 => address) public erc6551Accounts;

    constructor(string memory _baseSVG) SingleOwnershipSoulbound("Habitat NFT", "HAB") {
        baseSVG = _baseSVG;
    }

    function setNFTree(address _nftree) public {
        nftree = NFTree(_nftree);
    }

    function renderTokenById(uint256 id) external view override returns (string memory) {
        address account = erc6551Accounts[id];
        uint256 treeCount = nftree.balanceOf(account);
        string memory svg = baseSVG;
        for (uint i = 0; i < treeCount; i++) {
            uint256 treeId = nftree.tokenOfOwnerByIndex(account, i);
            string memory treeSvg = nftree.renderTokenById(treeId);
            svg = string.concat(svg, treeSvg);
        }
        svg = string.concat(svg, "</svg>");
        return svg;
    }

    function renderTokenByOwner(address owner) external view returns (string memory) {
        uint256 id = tokenOfOwnerByIndex(owner, 0);
        address account = erc6551Accounts[id];
        uint256 treeCount = nftree.balanceOf(account);
        string memory svg = baseSVG;
        for (uint i = 0; i < treeCount; i++) {
            uint256 treeId = nftree.tokenOfOwnerByIndex(account, i);
            string memory treeSvg = nftree.renderTokenById(treeId);
            svg = string.concat(svg, treeSvg);
        }
        svg = string.concat(svg, "</svg>");
        return svg;
    }

    function mint() public override ifNoBalance(_msgSender()) {
        uint256 newId = totalSupply();
        super.mint();
        erc6551Accounts[newId] = ERC_6551_REGISTRY.createAccount(
            ERC_6551_IMPL,
            block.chainid,
            address(this),
            newId,
            0,
            ""
        );
    }
}
