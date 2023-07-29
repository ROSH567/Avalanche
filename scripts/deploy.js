const hre = require("hardhat");

async function main() {

const deployedContract = await hre.ethers.deployContract("DT");

console.log("CONTRACT ADDRESS:", await deployedContract.getAddress());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});