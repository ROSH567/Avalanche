# Avalanche Project 

# 1

install all of the required files .. 
1st:  npm init -y 
2nd:   npm install --save-dev "hardhat@^2.17.0" "@nomicfoundation/hardhat-toolbox@^3.0.0"
3rd: npx hardhat run ./scripts/deploy.js --network fuji 
4th: npx hardhat verify < address of deployed contract > --network fuji
5th: run remixd and open remix ide to interact with the contract deployed 
6th: enter the address of deployed contract on remix and deploy it.. 
7th: can track all of the transactions on https://testnet.snowtrace.io/
through your testnet address 
