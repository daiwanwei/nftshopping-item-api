const ethers = require("ethers");
const config=require('./config').ethereum

const PROVIDER_URL=config.providerURL
console.log(`web3 provider url :${PROVIDER_URL}`)


const ethersProvider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);

module.exports={
    ethersProvider
}
