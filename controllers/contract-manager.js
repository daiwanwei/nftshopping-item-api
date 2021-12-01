const {contractManagerService} =require("../services")
const {CustomError} = require("../utils/error");
const {responseWithData, responseWithoutData} = require("./responses");
const creationEventManager=require("../contractEvents/creation")

/**
 * Post /api/contractManager/addCreationEvent
 * @tags contractManager
 * @param {AddCreationEventDto} request.body.required - AddCreationEventDto
 * @summary This is the summary of the endpoint
 * @return {object} 200 - success response
 */
addCreationEvent=async function (req, res){
    try{
        let {contract}=req.body
        console.log(req.body)
        await creationEventManager.addContractEvent(contract)
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
    addCreationEvent,
};

/**
 * A AddCreationEventDto type
 * @typedef {object} AddCreationEventDto
 * @property {string} contract.required - The contract
 */
