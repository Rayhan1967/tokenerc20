// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    event Minted(address indexed to, uint256 amount);
    event Burned(address indexed from, uint256 amount);

    constructor(uint256 initialSupply)
        ERC20("MyToken", "MTK")
        Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "MyToken: mint to the zero address");
        _mint(to, amount * 10 ** decimals());
        emit Minted(to, amount);
    }

    function burn(uint256 amount) public {
        require(amount > 0, "MyToken: burn amount must be greater than zero");
        _burn(msg.sender, amount * 10 ** decimals());
        emit Burned(msg.sender, amount);
    }
}
