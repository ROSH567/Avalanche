const hre = require("hardhat");
const readline = require("readline");
const tokenContractJSON = require("../artifacts/contracts/Lock.sol/DT.json");
const tokenABI = tokenContractJSON.abi;
const signeraddress = "0xd2253c197D075c8C44924017a09E8761dc4135f2";
const tokenaddress = "0xd2253c197D075c8C44924017a09E8761dc4135f2";

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const signer = await hre.ethers.getContractAt(tokenABI, signeraddress);
  console.log("-------------                                          -------------");
  console.log("--------------------------------------------------------------------");
  console.log("------------- Welcome To the GameStore by metacrafters -------------");
  console.log("-------------                                          -------------");
  console.log("-------------                                          -------------");
  console.log("-------------          Curent User Balance is:         -------------");
  console.log("                  "+await signer.Balance()+" Tokens         ");
console.log("-------------                                          -------------");
console.log("-------------    Enter the Choice of option to redeem  -------------");
console.log("-------------                                          -------------");
console.log("--------------------------------------------------------------------");
console.log("-------------                                          -------------");
console.log("\n\n");
console.log("--------------------------------------------------------------------");
console.log("--------------------------------------------------------------------");
console.log("-------------                                          -------------");
console.log("-------------   1. GiftVoucher worth 200 (10000tokens)   -------------");
console.log("-------------   2. GiftVoucher worth 500 (17000tokens)   -------------");
console.log("-------------   3. GiftVoucher worth 1000 (30000tokens)  -------------");
console.log("-------------                                          -------------");
console.log("--------------------------------------------------------------------");
console.log("-------------                                          -------------");
console.log("\n\n");
const q1="GiftVoucher worth 200"
const q2="GiftVoucher worth 500"
const q3="GiftVoucher worth 1000"


  rl.question("    Please enter the choice to redeem : ", async (choiceInput) => {
    rl.close();

    const choice = parseInt(choiceInput);
    if(choice==1)
    {
      const tx=await signer.redeem(10000);
      await tx.wait();
  
      console.log("redemtion for "+q1+" was successful");
      
      
    }
    else if(choice==2)
    {
      
      const tx=await signer.redeem(17000);
      await tx.wait();    
      console.log("redemtion for "+q2+" was successful");
    }
    else if(choice==3)
    {
      
      const tx=await signer.redeem(30000);
      await tx.wait();
      console.log("redemtion for "+q3+" was successful");
    }

    console.log("    "+await signer.Balance() + " is the updated balance");

    console.log("              transaction by -- " + await signer.getAddress());
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

