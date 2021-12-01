const {Item}=require("../models")

findByID=async function(id,options){
    let item=await (options && options.session?
        Item.findOne({_id:id}).session(options.session):
        Item.findOne({_id:id}).exec())
    return item
}

exist=async function(id,options){
    let isExisted=await Item.exists({_id:id})
    return isExisted
}

findAll=async function(options){
    let items=await (options && options.session?
        Item.find({}).session(options.session):
        Item.find({}).exec())
    return items
}

module.exports={
    findByID,
    exist,
    findAll,
}
