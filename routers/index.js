const creationRouter=require("./creation")
const erc721Router=require("./erc721")
const contractRouter=require("./contract")
const contractManagerRouter=require("./contract-manager")
const itemRouter=require("./item")
const factoryRouter=require("./factory")
const orderRouter=require("./order")

module.exports={
    creationRouter,
    erc721Router,
    contractRouter,
    contractManagerRouter,
    itemRouter,
    factoryRouter,
    orderRouter,
}

