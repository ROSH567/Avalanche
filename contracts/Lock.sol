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
function menu() external view{


  console.log("-------------\\\\______________________________________//-------------");
  console.log("-------------\\\\______________________________________//-------------");
  console.log("--------------------------------------------------------------------");
  console.log("_____________//--------------------------------------\\\\____________");

  console.log("------------- Welcome To the GameStore by metacrafters -------------");
console.log(" -------------|| Enter the Choice of option to redeem  ||-------------");
console.log("--------------\\\\_____________________________________//-------------");
console.log("--------------------------------------------------------------------");
console.log("");
console.log("");
console.log("--------------------------------------------------------------------");
console.log("_____________//--------------------------------------\\\\____________");
console.log("-------------||   1. GiftVoucher worth 200 (100tokens)   ||-------------");
console.log("-------------||   2. GiftVoucher worth 500 (170tokens)   ||-------------");
console.log("-------------|   3. GiftVoucher__worth 1000 (200tokens)  |-------------");
  console.log("-------------\\\\______________________________________//-------------");
  console.log("-------------\\\\______________________________________//-------------");
console.log("\n\n");

        }
function redeem(uint vikalp) external {
            uint rakam; 
            if(vikalp==1)
            {
                rakam=100;
            }
            else if(vikalp==2)
            {
                rakam=170;
            }
            else{

                rakam=200;
            }
            approve(msg.sender, rakam);
            burnFrom(msg.sender, rakam);
            console.log("redemption was successful");
        }

        
        function Balance() external view returns(uint){
           return balanceOf(msg.sender);
        }


        function Burn(uint amt) external{
            approve(msg.sender,amt);
            burnFrom(msg.sender, amt);
        }

        }

