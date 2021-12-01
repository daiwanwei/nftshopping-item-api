const {erc721Service} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithData,responseWithoutData}=require("./responses")
/**
 * GET /api/erc721/getNameOfERC721
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getNameOfERC721=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.getNameOfERC721(query.contract)
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
 * POST /api/erc721/approveToken
 * @tags erc721
 * @param {ApproveTokenDto} request.body.required - ApproveTokenDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
approveToken=async function (req, res){
    try{
        let dto=req.body
        await erc721Service.approveToken(dto)
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
 * POST /api/erc721/transferToken
 * @tags erc721
 * @param {TransferTokenDto} request.body.required - TransferTokenDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
transferToken=async function (req, res){
    try{
        let dto=req.body
        await erc721Service.transferToken(dto)
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
 * POST /api/erc721/setApprovalForTokens
 * @tags erc721
 * @param {SetApprovalForTokensDto} request.body.required - SetApprovalForTokensDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
setApprovalForTokens=async function (req, res){
    try{
        let dto=req.body
        await erc721Service.setApprovalForTokens(dto)
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
 * GET /api/erc721/balanceOfToken
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @param {string} owner.query.required - owner
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
balanceOfToken=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.balanceOfToken(query.contract,query.owner)
        responseWithData(res,200,"OK",dto)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res, 500, e.message, null)
        }
        return
    }
}

/**
 * GET /api/erc721/getApprovedOfToken
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @param {string} tokenId.query.required - tokenId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getApprovedOfToken=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.getApprovedOfToken(query.contract,query.tokenId)
        responseWithData(res,200,"OK",dto)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res, 500, e.message, null)
        }
        return
    }
}

/**
 * GET /api/erc721/isApprovedForTokens
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @param {string} owner.query.required - owner
 * @param {string} operator.query.required - operator
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
isApprovedForTokens=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.isApprovedForTokens(query.contract,query.owner,query.operator)
        responseWithData(res,200,"OK",dto)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res, 500, e.message, null)
        }
        return
    }
}

/**
 * GET /api/erc721/getOwnerOfToken
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @param {string} tokenId.query.required - tokenId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
getOwnerOfToken=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.getOwnerOfToken(query.contract,query.tokenId)
        responseWithData(res,200,"OK",dto)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res, 500, e.message, null)
        }
        return
    }
}

/**
 * GET /api/erc721/tokenURI
 * @tags erc721
 * @param {string} contract.query.required - contract
 * @param {string} tokenId.query.required - tokenId
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
tokenURI=async function (req, res){
    try{
        let query=req.query
        let dto=await erc721Service.tokenURI(query.contract,query.tokenId)
        responseWithData(res,200,"OK",dto)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res, 500, e.message, null)
        }
        return
    }
}

module.exports= {
    getNameOfERC721: getNameOfERC721,
    approveToken: approveToken,
    transferToken: transferToken,
    setApprovalForTokens: setApprovalForTokens,
    balanceOfToken: balanceOfToken,
    getApprovedOfToken: getApprovedOfToken,
    isApprovedForTokens: isApprovedForTokens,
    getOwnerOfToken: getOwnerOfToken,
    tokenURI: tokenURI,
};
