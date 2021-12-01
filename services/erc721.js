const {ERC721Contract}=require("../pkg/contract")
const contractService=require("./contract")
const {ERC721ServiceError,serviceEvent}=require('./error')


getNameOfERC721=async function (contractAddress, options) {
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new ERC721Contract(contractAddress)
    const name = await contract.name()
    return {
        name:name,
    }
}

approveToken=async function(dto, options){
    if (!await contractService.existContract(dto.contract)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new ERC721Contract(dto.contract)
    const result = await contract.approve(dto.to,dto.tokenId)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}

transferToken=async function(dto, options){
    if (!await contractService.existContract(dto.contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new ERC721Contract(dto.contract)
    const result = await contract.safeTransferFrom(dto.from,dto.to,dto.tokenId)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}

setApprovalForTokens=async function(dto,options){
    if (!await contractService.existContract(dto.contract)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract =new ERC721Contract(dto.contract)
    const result = await contract.setApprovalForAll(dto.operator,dto.approved)
    console.log("Minted creature. Transaction: " + result.transactionHash);
}


balanceOfToken=async function(contractAddress,owner,options){
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new ERC721Contract(contractAddress)
    const result = await contract.balanceOf(owner)
    return {
        balance: result,
    }
}

getApprovedOfToken=async function(contractAddress,tokenId,options){
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new ERC721Contract(contractAddress)
    const result = await contract.getApproved(tokenId)
    return {
        approved: result,
    }
}

isApprovedForTokens=async function(contractAddress,owner,operator,options){
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new ERC721Contract(contractAddress)
    const result = await contract.isApprovedForAll(owner,operator)
    return {
        isApproved: result,
    }
}

getOwnerOfToken=async function(contractAddress, tokenId, options){
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new ERC721Contract(contractAddress)
    const result = await contract.ownerOf(tokenId)
    return {
        owner: result,
    }
}

tokenURI=async function(contractAddress,tokenId,options){
    if (!await contractService.existContract(contractAddress)){
        throw new ERC721ServiceError(serviceEvent.CONTRACT_NOT_FOUND)
    }
    const contract = new ERC721Contract(contractAddress)
    const result = await contract.tokenURI(tokenId)
    return {
        uri: result,
    }
}


/**
 * A ApproveTokenDto type
 * @typedef {object} ApproveTokenDto
 * @property {string} contract.required - The contract
 * @property {string} to - The to
 * @property {string} tokenId - The tokenId
 */

/**
 * A TransferTokenDto type
 * @typedef {object} TransferTokenDto
 * @property {string} contract.required - The contract
 * @property {string} from - The from
 * @property {string} to - The to
 * @property {string} tokenId - The tokenId
 */

/**
 * A SetApprovalForTokensDto type
 * @typedef {object} SetApprovalForTokensDto
 * @property {string} contract.required - The contract
 * @property {string} operator - The operator
 * @property {boolean} approved - The approved
 */

module.exports= {
    getNameOfERC721: getNameOfERC721,
    approveToken: approveToken,
    transferToken: transferToken,
    setApprovalForTokens,
    balanceOfToken,
    getApprovedOfToken,
    isApprovedForTokens,
    getOwnerOfToken: getOwnerOfToken,
    tokenURI,
};
