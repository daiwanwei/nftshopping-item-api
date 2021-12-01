const {creationService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithData, responseWithoutData} = require("./responses");

/**
 * GET /api/creation/getNameOfCreation
 * @tags creation
 * @param {string} contract.query.required - contract
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getNameOfCreation=async function (req, res){
    try{
        let query=req.query
        let dto=await creationService.getNameOfCreation(query.contract)
        responseWithData(res,200,"OK",dto)
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
 * POST /api/creation/mintCreation
 * @tags creation
 * @param {MintCreationDto} request.body.required - MintCreationDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
mintCreation=async function (req,res){
    try{
        const {productId,contract, creator, creatorRatio, agent, agentRatio, publisher, publisherRatio}=req.body
        await creationService.mintCreation({
            productId,contractAddress:contract, creator, creatorRatio, agent, agentRatio, publisher, publisherRatio
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
 * POST /api/creation/mintCreationByBatch
 * @tags creation
 * @param {MintCreationByBatchDto} request.body.required - MintCreationByBatchDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
mintCreationByBatch=async function (req,res){
    try{
        const {productId,contract,amount}=req.body
        await creationService.mintCreationByBatch({
            productId,contractAddress:contract, amount
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
 * POST /api/creation/approveCreation
 * @tags creation
 * @param {ApproveCreationDto} request.body.required - ApproveCreationDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
approveCreation=async function (req, res){
    try{
        let dto=req.body
        await creationService.approveCreation(dto)
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
 * POST /api/creation/tradeCreation
 * @tags creation
 * @param {TradeCreationDto} request.body.required - TradeCreationDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
tradeCreation=async function (req, res){
    try{
        const {contract,token,from,to,price}=req.body
        const order=await creationService.tradeCreation(
            {contractAddress:contract,token,from,to,price},
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
 * POST /api/creation/transferCreation
 * @tags creation
 * @param {TransferCreationDto} request.body.required - TransferCreationDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
transferCreation=async function (req, res){
    try{
        let dto=req.body
        await creationService.transferCreation(dto)
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
 * POST /api/creation/setApprovalForCreations
 * @tags creation
 * @param {SetApprovalForCreationsDto} request.body.required - SetApprovalForCreationsDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
setApprovalForCreations=async function (req, res){
    try{
        let dto=req.body
        await creationService.setApprovalForCreations(dto)
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
 * GET /api/creation/balanceOfCreation
 * @tags creation
 * @param {string} contract.query.required - contract
 * @param {string} owner.query.required - owner
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
balanceOfCreation=async function (req, res){
    try{
        let query=req.query
        let dto=await creationService.balanceOfCreation(query.contract,query.owner)
        responseWithData(res,200,"OK",dto)
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
 * GET /api/creation/getApprovedOfCreation
 * @tags creation
 * @param {string} contract.query.required - contract
 * @param {string} creationId.query.required - creationId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getApprovedOfCreation=async function (req, res){
    try{
        let query=req.query
        let dto=await creationService.getApprovedOfCreation(query.contract,query.creationId)
        responseWithData(res,200,"OK",dto)
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
 * GET /api/creation/isApprovedForCreations
 * @tags creation
 * @param {string} contract.query.required - contract
 * @param {string} owner.query.required - owner
 * @param {string} operator.query.required - operator
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
isApprovedForCreations=async function (req, res){
    try{
        let query=req.query
        let dto=await creationService.isApprovedForCreations(query.contract,query.owner,query.operator)
        responseWithData(res,200,"OK",dto)
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
 * GET /api/creation/getOwnerOfCreation
 * @tags creation
 * @param {string} contract.query.required - contract
 * @param {string} creationId.query.required - creationId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getOwnerOfCreation=async function (req, res){
    try{
        let query=req.query
        let dto=await creationService.getOwnerOfCreation(query.contract,query.creationId)
        responseWithData(res,200,"OK",dto)
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
 * GET /api/creation/creationURI
 * @tags creation
 * @param {string} contract.query.required - contract
 * @param {string} creationId.query.required - creationId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
creationURI=async function (req, res){
    try{
        let query=req.query
        let uri=await creationService.creationURI(query.contract,query.creationId)
        responseWithData(res,200,"OK",uri)
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
    getNameOfCreation: getNameOfCreation,
    mintCreation,
    mintCreationByBatch,
    approveCreation: approveCreation,
    tradeCreation: tradeCreation,
    transferCreation: transferCreation,
    setApprovalForCreations: setApprovalForCreations,
    balanceOfCreation: balanceOfCreation,
    getApprovedOfCreation: getApprovedOfCreation,
    isApprovedForCreations: isApprovedForCreations,
    getOwnerOfCreation: getOwnerOfCreation,
    creationURI: creationURI,
};
