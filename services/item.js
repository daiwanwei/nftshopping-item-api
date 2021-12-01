const {itemDao}=require("../persistence/repositories")
const contractService=require("./contract")
const {Item}=require("../persistence/models")
const {ItemServiceError,serviceEvent} = require("./error");
const objectMapper = require("object-mapper");

findAllItem=async function(options){
    let items=await itemDao.findAll(options)
    let dto=new Array()
    items.forEach(item => dto.push(objectMapper(item,mapOfItem)))
    return dto
}

findItem=async function({contractAddress,token},options){
    let item=await itemDao.findByID({
        contract:contractAddress,
        token:token,
    },options)
    let dto=objectMapper(item,mapOfItem)
    return dto
}

existItem=async function(contractAddress,token,options){
    let isExisted=await itemDao.exist({
        contract:contractAddress,
        token:token,
    },options)
    return isExisted
}

createItem=async function(
    {productId,token,contract},
    options,
){
    let item
    let isExisted=await contractService.existContract(contract,options)
    if (!isExisted){
        throw new ItemServiceError(serviceEvent.CONTRACT_NOT_FOUND);
    }
    let id={
        contract:contract,
        token:token,
    }
    isExisted=await itemDao.exist(id,options)
    if (isExisted){
        throw new ItemServiceError(serviceEvent.ITEM_EXISTED);
    }

    item=new Item({
        _id:id,
        creationId: productId,
    })
    await item.save()
    return
}


module.exports={
    findAllItem,
    findItem,
    existItem,
    createItem,
}

const mapOfItem = {
    "_id.contract": "contractAddress",
    "_id.token": "token",
};

/**
 * A CreateItemDto
 * @typedef {object} CreateItemDto
 * @property {string} productId
 * @property {string} contract
 * @property {string} token
 */
