const {orderService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithoutData, responseWithData} = require("./responses");

/**
 * POST /api/order/createOrder
 * @tags order
 * @summary This is the summary of the endpoint
 * @param {CreateOrderDto} request.body.required - CreateOrder info
 * @return {DataResponse} 200 - success response
 */
createOrder=async function (req, res){
    try{
        const {contract,token,from,to,price}=req.body
        const order=await orderService.createOrder(
            {itemId:{contractAddress:contract,token},from,to,price}
        )
        responseWithData(res,200,"OK",order)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /api/order/findAllOrder
 * @tags order
 * @param {string} itemContract.query - itemContract
 * @param {string} itemToken.query - itemToken
 * @param {string} from.query - from
 * @param {string} to.query - to
 * @param {string} orderStatus.query - orderStatus
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findAllOrder=async function (req,res){
    try{
        const {itemContract,itemToken,from,to,orderStatus}=req.query
        const result =await orderService.findAllOrderByFilter(
            {itemContract,itemToken,from,to,orderStatus},
            )
        responseWithData(res,200,"OK",result)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /api/order/findOrder
 * @tags order
 * @param {string} orderId.query - orderId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findOrder=async function (req,res){
    try{
        const orderId=req.query.orderId
        const result =await orderService.findOrder(orderId)
        responseWithData(res,200,"OK",result)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

module.exports= {
    createOrder,
    findAllOrder,
    findOrder,
};
