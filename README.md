# Avalanche Project 

# 1

install all of the required files .. 
1st:  npm i

2nd: npx hardhat run ./scripts/deploy.js --network fuji 
(now update the token address into all of the scripts)

3rd: npx hardhat verify < address of deployed contract > --network fuji

4th: run : "remixd "
connect remix ide to the localhost

5th: now use the <address of the deployed contract> while using it on remix ide and now can use all of the functions  

6th: can track all of the transactions on https://testnet.snowtrace.io/
through your testnet address 

Note: Take care of the private_key and api in hardhat.config.js
