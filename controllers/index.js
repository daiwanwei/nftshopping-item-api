const creationController = require("./creation");
const erc721Controller = require("./erc721");
const contractController=require("./contract")
const contractManagerController=require("./contract-manager")
const itemController=require("./item")
const factoryController=require("./factory")
const orderController=require("./order")

module.exports={
    creationController: creationController,
    contractManagerController,
    erc721Controller,
    contractController,
    factoryController,
    itemController,
    orderController,
}

/**
 * response
 * @typedef {object} response
 * @property {integer} code.required - Code
 * @property {string} msg.required - Message
 */

/**
 * DataResponse
 * @typedef {object} DataResponse
 * @property {integer} code - Code
 * @property {string} msg - Message
 * @property {object} data - Data
 */
