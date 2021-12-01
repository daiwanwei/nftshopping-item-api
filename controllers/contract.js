const {contractService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithoutData, responseWithData} = require("./responses");

/**
 * POST /api/contract/createContract
 * @tags contract
 * @summary This is the summary of the endpoint
 * @param {createContractDto} request.body.required - createContract info
 * @return {DataResponse} 200 - success response
 */
createContract=async function (req, res){
    try{
        req.body
        await contractService.createContract(req.body)
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
 * GET /api/contract/findAllContract
 * @tags contract
 * @param {string} createStart.query - createStart
 * @param {string} createEnd.query - createEnd
 * @param {string} status.query - status
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findAllContract=async function (req,res){
    try{
        const filter=req.query
        const contract =await contractService.findAllContract(filter)
        responseWithData(res,200,"OK",contract)
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
 * GET /api/contract/findContract
 * @tags contract
 * @param {string} contract.query - contract
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
findContract=async function (req,res){
    try{
        const contractAddress=req.query.contract
        const contract =await contractService.findContract(contractAddress)
        responseWithData(res,200,"OK",contract)
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
    createContract,
    findAllContract,
    findContract,
};

/**
 * A createContractDto
 * @typedef {object} createContractDto
 * @property {string} contractAddress
 */
