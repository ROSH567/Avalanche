const hre = require("hardhat");
const readline = require("readline");
const tokenContractJSON = require("../artifacts/contracts/Lock.sol/DT.json");

const tokenABI = tokenContractJSON.abi;
const tokenaddress = "0x7c188D88BB320C2416709428f2cD11Ef5710aeFB";
const toaddress = "0x170171a776341b5CFAb746c1fd1E05b00Bc3Fca8";
//0x170171a776341b5CFAb746c1fd1E05b00Bc3Fca8
//0x12B4BA356E6C17275f9E817C79525E7773E68CCB
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please enter the amount to mint: ", async (amtInput) => {
    rl.close();

    const amt = parseInt(amtInput);

    const token = await hre.ethers.getContractAt(tokenABI, tokenaddress);
    console.log(await token.Balance() + " is the balance amount sender");
    console.log(await token.balanceOf(toaddress) + " is the balance amount recipient");
    const tx = await token.transfers(toaddress, amt);
    await tx.wait();
    console.log("The transferred to address: " + toaddress + " was successful");
    console.log(await token.balanceOf(toaddress) + " is the updated amount recipient");
    console.log(await token.Balance() + " is the updated amount sender");
    console.log("transaction done by -- " + await tokenaddress);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
