const {orderDao}=require("../persistence/repositories")
const contractService=require("./contract")
const {Order}=require("../persistence/models")
const {OrderServiceError,serviceEvent} = require("./error");
const objectMapper = require("object-mapper");
const mongoose = require("mongoose");

findAllOrder=async function(options){
    let orders=await orderDao.findAll(options)
    let dto=[]
    orders.forEach(order => dto.push(objectMapper(order,mapOfOrder)))
    return dto
}

findAllOrderByFilter=async function({itemContract,itemToken,from,to,orderStatus},options){
    const filter=getFilter({itemToken,from,to,orderStatus})
    let orders=await orderDao.findAllByFilter(filter, options)
    let dto=[]
    orders.forEach(order => dto.push(objectMapper(order,mapOfOrder)))
    return dto
}

findOrder=async function(orderId,options){
    let order=await orderDao.findByID(orderId,options)
    if (!order){
        return null
    }
    let dto=objectMapper(order,mapOfOrder)
    return dto
}

existOrder=async function(orderId,options){
    let isExisted=await orderDao.exist(orderId,options)
    return isExisted
}

createOrder=async function(
    {itemId:{contractAddress,token},from,to,price},
    options,
    ){
    let order
    let isExisted=await contractService.existContract(contractAddress,options)
    if (!isExisted){
        throw new OrderServiceError(serviceEvent.CONTRACT_NOT_FOUND);
    }
    order=new Order({
        _id:new mongoose.Types.ObjectId(),
        itemId:{
            contract:contractAddress,
            token:token,
        },
        from:from,
        to:to,
        price: price,
        orderStatus:"WAIT_FOR_PAY",
        orderAt:Date.now(),
    })
    await order.save(options)
    let orderDto=objectMapper(order,mapOfOrder)
    return orderDto
}

confirmOrder=async function(
    {orderId},
    options,
){
    let order=await orderDao.findByID(orderId,options)
    if (!order){
        throw new OrderServiceError(serviceEvent.ORDER_NOT_FOUND);
    }
    order.orderStatus="PAID"
    await order.save(options)
    return
}

module.exports={
    findAllOrder,
    findAllOrderByFilter,
    findOrder,
    existOrder,
    createOrder,
    confirmOrder,
}

function getFilter({itemContract,itemToken,from,to,orderStatus}){
    let filter={}
    if (
        (itemContract && itemContract.length>0) && (itemToken && itemToken.length>0)
    ){
        filter={...filter,itemId:{
            contract:itemContract,
            token:itemToken,
        }}
    }
    if (from && from.length>0){
        filter={...filter,from}
    }
    if (to && to.length>0){
        filter={...filter,to}
    }
    if (orderStatus && orderStatus.length>0){
        filter={...filter,orderStatus}
    }
    return filter
}

const mapOfOrder = {
    "_id": {
        "key":"orderId",
        "transform":function (value){
            return value.toString()
        },
        "default":"",
    },
    "itemId.contract":"itemContract",
    "itemId.token":"itemToken",
    "from": "from",
    "to": "to",
    "price": "price",
    "orderStatus":"orderStatus",
    "orderAt":"orderAt",
};

/**
 * A CreateOrderDto
 * @typedef {object} CreateOrderDto
 * @property {string} contract
 * @property {string} token
 * @property {string} from
 * @property {string} to
 * @property {number} price
 */
