const {Contract}=require("../models")

findByID=async function(id,options){
    let contract=await (options && options.session?
        Contract.findOne({_id:id}).session(options.session):
        Contract.findOne({_id:id}).exec())
    return contract
}

findByAddress=async function(address,options){
    let contract=await (options && options.session?
        Contract.findOne({address:address}).session(options.session):
        Contract.findOne({address:address}).exec())
    return contract
}

exist=async function(id,options){
    let isExisted=await Contract.exists({_id:id})
    return isExisted
}

existByAddress=async function(address,options){
    let isExisted=await Contract.exists({address:address})
    return isExisted
}

findAll=async function(options){
    let contracts=await (options && options.session?
            Contract.find({}).session(options.session):
            Contract.find({}).exec())
    return contracts
}

module.exports={
    findByAddress,
    findByID,
    exist,
    existByAddress,
    findAll,
}
