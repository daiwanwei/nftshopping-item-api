const contractService=require("./contract")
const {ItemServiceError,serviceEvent} = require("./error");
const creationService = require("./creation");
const itemService = require("./item");
const axios = require("axios");
const config = require("../pkg/config");

orderItem=async function(
    {productId,contractAddress,amount}, options
){
    let isExisted=await contractService.existContract(contractAddress,options)
    if (!isExisted){
        throw new ItemServiceError(serviceEvent.CONTRACT_NOT_FOUND);
    }
    await creationService.mintCreationByBatch({
        productId,contractAddress,amount
    })
    return
}

manufactureItem=async function(
    {productId,token,contract},options
){
    await itemService.createItem(
       {productId,token,contract},options
    )
    await deliverItem({productId,token,contract})
        .then(()=>console.log(`(${productId},${token},${contract}) deliver successfully`))
        .catch((e)=>console.log(e))
}

async function deliverItem(
    {productId, token, contract}, options
) {

    let res = await axios.post(config.itemDeliverCallback, {
        creationId: productId,
        contract: contract,
        token: token
    })
    let payload=res.data
    if (payload.code!==200){
        throw new Error(payload.msg)
    }
}

module.exports={
    orderItem,
    manufactureItem,
    deliverItem,
}

/**
 * A OrderItemDto type
 * @typedef {object} OrderItemDto
 * @property {string} productId.required - The productId
 * @property {string} contract.required - The contract
 * @property {number} amount.required - The amount
 */

/**
 * A ManufactureItemDto type
 * @typedef {object} ManufactureItemDto
 * @property {string} productId.required - The productId
 * @property {string} contract.required - The contract
 * @property {string} token.required - The token
 */

/**
 * A DeliverItemDto type
 * @typedef {object} DeliverItemDto
 * @property {string} productId.required - The productId
 * @property {string} contract.required - The contract
 * @property {string} token.required - The token
 */

