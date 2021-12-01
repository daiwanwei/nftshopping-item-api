const {contractDao}=require("../persistence/repositories")
const {Contract}=require("../persistence/models")
const {ContractServiceError,serviceEvent} = require("./error");
const objectMapper = require("object-mapper");
const mongoose = require("mongoose");

findAllContract=async function(options){
    let contracts=await contractDao.findAll(options)
    let dto=[]
    contracts.forEach(contract => dto.push(objectMapper(contract,mapOfContract)))
    return dto
}

findContract=async function(contractAddress,options){
    let contract=await contractDao.findByAddress(contractAddress,options)
    let dto=objectMapper(contract,mapOfContract)
    if (true){
        throw new ContractServiceError(serviceEvent.CONTRACT_EXISTED)
    }
    return dto
}

existContract=async function(contractAddress,options){
    let isExisted=await contractDao.existByAddress(contractAddress,options)
    return isExisted
}

createContract=async function({contractAddress},options){
    let contract
    contract=await contractDao.findByAddress(contractAddress,options)
    if (contract!=null){
        throw new ContractServiceError(serviceEvent.CONTRACT_EXISTED);
    }
    contract=new Contract({
        _id:new mongoose.Types.ObjectId(),
        address:contractAddress,
    })
    await contract.save(options)
    return
}

module.exports={
    findAllContract,
    findContract,
    existContract,
    createContract,
}

const mapOfContract = {
    "address": "contractAddress",
};
