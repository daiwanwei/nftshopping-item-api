const ethers = require('ethers');
const {ethersProvider} =require('./ethers')
const CREATION_ABI = require("../data/abi/Creation.json");

class CreationEventManager {
    constructor(callbackForMint,callbackForTrade) {
        console.log("CreationEventManager new")
        let contracts = new Map();
        this.contracts = contracts;
        this.callbackForMint=callbackForMint
        this.callbackForTrade=callbackForTrade
    }

    async addContractEvent(address){
        const contract =this.getContract(address)
        if (!contract){
            throw new Error(`${address} isn't contract`)
        }
        contract.on(contract.filters.Mint(),this.callbackForMint(address))
        contract.on(contract.filters.Trade(),this.callbackForTrade(address))
        this.contracts.set(address,contract)
        console.log(`add event of ${address}`)
    }

    removeContractEvent(address){
        if (!this.contracts.has(address)){
            return
        }
        this.contracts.delete(address)
    }

    getContract(address){
        if (this.contracts.has(address) || !ethers.utils.isAddress(address)){
            return;
        }
        const contract = new ethers.Contract(
            address,
            CREATION_ABI,
            ethersProvider
        );
        return contract;
    }
}

module.exports={
    CreationEventManager
}
