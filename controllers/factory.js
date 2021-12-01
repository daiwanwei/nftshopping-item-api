const {factoryService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithData, responseWithoutData} = require("./responses");

/**
 * POST /api/factory/orderItem
 * @tags factory
 * @summary This is the summary of the endpoint
 * @param {OrderItemDto} request.body.required - OrderItem info
 * @return {DataResponse} 200 - success response
 */
orderItem=async function (req, res){
    try{
        const {productId,contract, amount}=req.body
        await factoryService.orderItem({
            productId,contractAddress:contract, amount,
        })
        responseWithoutData(res,200,"OK")
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithoutData(res,e.code,e.message)
        } else {
            responseWithoutData(res,500,e.message)
        }
        return
    }
}
/**
 * POST /api/factory/manufactureItem
 * @tags factory
 * @summary This is the summary of the endpoint
 * @param {ManufactureItemDto} request.body.required - ManufactureItemDto info
 * @return {DataResponse} 200 - success response
 */
manufactureItem=async function (req, res){
    try{
        const {productId,contract, token}=req.body
        await factoryService.manufactureItem({
            productId,contract, token,
        })
        responseWithoutData(res,200,"OK")
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithoutData(res,e.code,e.message)
        } else {
            responseWithoutData(res,500,e.message)
        }
        return
    }
}

/**
 * POST /api/factory/deliverItem
 * @tags factory
 * @summary This is the summary of the endpoint
 * @param {DeliverItemDto} request.body.required - DeliverItemDto info
 * @return {DataResponse} 200 - success response
 */
deliverItem=async function (req, res){
    try{
        const {productId,contract, token}=req.body
        await factoryService.deliverItem({
            productId,contract, token,
        })
        responseWithoutData(res,200,"OK")
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithoutData(res,e.code,e.message)
        } else {
            responseWithoutData(res,500,e.message)
        }
        return
    }
}


module.exports= {
    orderItem,
    manufactureItem,
    deliverItem,
};
