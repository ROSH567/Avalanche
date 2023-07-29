const hre = require("hardhat");
const readline = require("readline");
const tokenContractJSON = require("../artifacts/contracts/Lock.sol/DT.json");

const tokenABI = tokenContractJSON.abi;
const tokenaddress = "0x7c188D88BB320C2416709428f2cD11Ef5710aeFB";
async function main() {
  

    const token = await hre.ethers.getContractAt(tokenABI, tokenaddress);

    console.log(await token.Balance() + " is the balance amount");
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
