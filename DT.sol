// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract DT is ERC20, Ownable {

    constructor() ERC20("Degen", "DGN") {}

        function mint(address to, uint256 amt) public onlyOwner{
            _mint(to, amt);
        }


        function transferring(address to, uint amt) external{
            require(balanceOf(msg.sender) >= amt, "Low Balance!!");
            approve(msg.sender, amt);
            transferFrom(msg.sender, to, amt);
        }

        
        function Balance() external view returns(uint){
           return balanceOf(msg.sender);
        }


        function Burn(uint amt) external{
            require(balanceOf(msg.sender)>= amt, "You do not have enough Tokens");
            _burn(msg.sender, amt);
        }


       function Select() public pure returns(string memory) {
            return "1.Option1 : 100, 2.Option2 :200, Option3 :300";
        }


        function redeem(uint ch) external payable returns(string memory , uint){
            require(ch<=3,"Invalid choice");
             if(ch ==1){
                require(balanceOf(msg.sender)>=100, "low balance");
                _burn(msg.sender,100);
                console.log ("The redemption was successful and the updated balance is: ",balanceOf(msg.sender));

            }
            else if(ch ==2){
                require(balanceOf(msg.sender)>=200, "low balance");
                _burn(msg.sender,200);
                console.log ("The redemption was successful and the updated balance is: ",balanceOf(msg.sender));


            }
            else{
                require(balanceOf(msg.sender)>=300, "low balance");
                _burn(msg.sender,300);
                console.log ("The redemption was successful and the updated balance is: ",balanceOf(msg.sender));

            }


        }

}