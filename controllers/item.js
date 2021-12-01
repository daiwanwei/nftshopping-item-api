const {itemService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithData, responseWithoutData} = require("./responses");


/**
 * POST /api/item/createItem
 * @tags item
 * @summary This is the summary of the endpoint
 * @param {CreateItemDto} request.body.required - createItem info
 * @return {DataResponse} 200 - success response
 */
createItem=async function (req, res){
    try{
        const {productId,token,contract}=req.body
        await itemService.createItem({productId,token,contract})
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
 * GET /api/item/findAllItem
 * @tags item
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findAllItem=async function (req,res){
    try{
        const filter=req.query
        const items =await itemService.findAllItem(filter)
        responseWithData(res,200,"OK",items)
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
 * GET /api/item/findItem
 * @tags item
 * @param {string} contract.query - contract
 * @param {string} token.query - token
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findItem=async function (req,res){
    try{
        const {contract,token}=req.query
        const item =await itemService.findItem({contractAddress:contract,token})
        responseWithData(res,200,"OK",item)
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
    createItem,
    findAllItem,
    findItem,
};
