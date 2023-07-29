// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract DT is ERC20, Ownable,ERC20Burnable {

           address private owners;
    constructor() ERC20("Degen", "DGN") {
          owners=msg.sender;
          _mint(msg.sender, 1000000 * 10 ** decimals()); 

    }

        function mints(address to, uint256 amt) public onlyOwner{
            _mint(to, amt);
        }


        function transfers(address to, uint amt) external{
            approve(msg.sender, amt);
            transferFrom(msg.sender, to, amt);
        }
        function redeem(uint amt) external{
            approve(msg.sender, amt);
            transferFrom(msg.sender, owners, amt);
        }

        
        function Balance() external view returns(uint){
           return balanceOf(msg.sender);
        }


        function Burn(uint amt) external{
            approve(msg.sender,amt);
            burnFrom(msg.sender, amt);
        }

        }

