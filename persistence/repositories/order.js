const {Order}=require("../models")

findByID=async function(id,options){
    let order=await (options && options.session?
        Order.findOne({_id:id}).session(options.session):
        Order.findOne({_id:id}).exec())
    return order
}

exist=async function(id,options){
    let isExisted=await Order.exists({_id:id})
    return isExisted
}

findAll=async function(options){
    let order=await (options && options.session?
        Order.find({}).session(options.session):
        Order.find({}).exec())
    return order
}

findAllByFilter=async function(
    {itemId,from,to,orderStatus},
    options,
    ){
    const filter=getFilter({itemId,from,to,orderStatus})
    let order=await (options && options.session?
        Order.find(filter).session(options.session):
        Order.find(filter).exec())
    return order
}

function getFilter({itemId,from,to,orderStatus}){
    let filter={}
    if (itemId){
        filter={...filter,itemId}
    }
    if (from){
        filter={...filter,from}
    }
    if (to){
        filter={...filter,to}
    }
    if (orderStatus){
        filter={...filter,orderStatus}
    }
    return filter
}

module.exports={
    findByID,
    exist,
    findAll,
    findAllByFilter,
}
