const {CreationContract}=require("../pkg/contract")
const contractService=require("./contract")
const {CreationServiceError,serviceEvent}=require('./error')


getNameOfCreation=async function (contractAddress, options) {
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new CreationContract(contractAddress)
    const name = await contract.name()
    return {
        name:name,
    }
}

mintCreation=async function (
    {productId,contractAddress},
    options,
) {
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new CreationContract(contractAddress)
    const result = await contract.mint(productId)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}

mintCreationByBatch=async function ({
                                        productId,contractAddress,amount
                                    },
                                    options,
                                    ) {
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new CreationContract(contractAddress)
    const result = await contract.mintByBatch(productId,amount)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}

approveCreation=async function(dto, options){
    if (!await contractService.existContract(dto.contract)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new CreationContract(dto.contract)
    const result = await contract.approve(dto.to,dto.creationId)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}

// tradeCreation=async function(
//     {contractAddress,token,from,to},
//     options,
// ){
//     const item=itemService.findItem({contractAddress,token})
//     if (!item){
//         throw new CreationServiceError(serviceEvent.ITEM_NOT_FOUND)
//     }
//     let order=await orderService.createOrder(
//         {itemId:{contractAddress,token},from, to},
//     )
//     const contract =new CreationContract(contractAddress)
//     const result = await contract.trade(order.orderId,from,to,token)
//     console.log("Minted creature. Transaction: " + result.transactionHash);
//     return order
// }
//
// transferCreation=async function(dto, options){
//     if (!await contractService.existContract(dto.contract)){
//         throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
//     }
//     const contract =new CreationContract(dto.contract)
//     const result = await contract.safeTransferFrom(dto.from,dto.to,dto.creationId)
//     console.log("Minted creature. Transaction: " + result.transactionHash);
// }

setApprovalForCreations=async function(dto, options){
    if (!await contractService.existContract(dto.contract)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new CreationContract(dto.contract)
    const result = await contract.setApprovalForAll(dto.operator,dto.approved)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}


balanceOfCreation=async function(contractAddress, owner, options){
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new CreationContract(contractAddress)
    const result = await contract.balanceOf(owner)
    return {
        balance: result,
    }
}

getApprovedOfCreation=async function(contractAddress,creationId, options){
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new CreationContract(contractAddress)
    const result = await contract.getApproved(creationId)
    return {
        approved: result,
    }
}

isApprovedForCreations=async function(contractAddress, owner, operator, options){
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new CreationContract(contractAddress)
    const result = await contract.isApprovedForAll(owner,operator)
    return {
        isApproved: result,
    }
}

getOwnerOfCreation=async function(contractAddress, creationId, options){
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new CreationContract(contractAddress)
    const result = await contract.ownerOf(creationId)
    return {
        owner: result,
    }
}

creationURI=async function(contractAddress, creationId, options){
    if (!await contractService.existContract(contractAddress)){
        throw new CreationServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new CreationContract(contractAddress)
    const result = await contract.tokenURI(creationId)
    return {
        uri: result,
    }
}

/**
 * A MintCreationDto type
 * @typedef {object} MintCreationDto
 * @property {string} productId.required - The productId
 * @property {string} contract.required - The contract
 */

/**
 * A MintCreationByBatchDto type
 * @typedef {object} MintCreationByBatchDto
 * @property {string} productId.required - The productId
 * @property {string} contract.required - The contract
 * @property {number} amount.required - The amount
 */

/**
 * A ApproveCreationDto type
 * @typedef {object} ApproveCreationDto
 * @property {string} contract.required - The contract
 * @property {string} to - The to
 * @property {string} creationId - The creationId
 */

/**
 * A TradeCreationDto type
 * @typedef {object} TradeCreationDto
 * @property {string} contract.required - The contract
 * @property {string} from - The from
 * @property {string} to - The to
 * @property {string} token - The token
 */

/**
 * A SetApprovalForCreationsDto type
 * @typedef {object} SetApprovalForCreationsDto
 * @property {string} contract.required - The contract
 * @property {string} operator - The operator
 * @property {boolean} approved - The approved
 */

module.exports= {
    getNameOfCreation: getNameOfCreation,
    mintCreation: mintCreation,
    mintCreationByBatch,
    approveCreation: approveCreation,
    setApprovalForCreations: setApprovalForCreations,
    balanceOfCreation: balanceOfCreation,
    getApprovedOfCreation: getApprovedOfCreation,
    getOwnerOfCreation: getOwnerOfCreation,
    isApprovedForCreations: isApprovedForCreations,
    creationURI: creationURI,
};
