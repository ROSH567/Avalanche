const hre = require("hardhat");
const readline = require("readline");
const tokenContractJSON = require("../artifacts/contracts/Lock.sol/DT.json");

const tokenABI = tokenContractJSON.abi;
const tokenaddress = "0x7c188D88BB320C2416709428f2cD11Ef5710aeFB";
const t=require("./Bal.js")

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please enter the amount to Burn: ", async (amtInput) => {
    rl.close();

    const amt = parseInt(amtInput);
     
    const token = await hre.ethers.getContractAt(tokenABI, tokenaddress);
    console.log("The initial tokens are "+await t);
    const tx = await token.Burn(amt);
    await tx.wait();
    console.log("The tokens now are "+await token.Balance());
    console.log("The Burning of tokens was successful");
    console.log("transaction done by -- " + await tokenaddress);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
