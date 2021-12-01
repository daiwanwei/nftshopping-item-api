const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const config=require('./config').ethereum

const PROVIDER_URL=config.providerURL
const ACCOUNT_KEY=config.web3.accountKey
const PRIVATE_KEY=config.web3.privateKey
console.log(`web3 provider url :${PROVIDER_URL}`)
console.log(`web3 private key :${PRIVATE_KEY}`)
const provider = new HDWalletProvider(
    PRIVATE_KEY,
    PROVIDER_URL,
);

// const provider =new Web3.providers.HttpProvider('http://localhost:8545')

const web3 = new Web3(provider);
module.exports={
    web3,
    ACCOUNT_KEY,
}
