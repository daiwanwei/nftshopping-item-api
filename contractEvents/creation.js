const {CreationEventManager} = require("../pkg/contract-event");
const {contractService, orderService, factoryService} = require("../services")

let instance = new CreationEventManager(callbackForMint, callbackForTrade)
initialCreationEventManager(instance)
    .then(() => {
        console.log(`CreationEventManager has created successfully`)
    })
    .catch(e => console.log(`CreationEventManager create fail:${e}`))
    .finally(() => console.log())


async function addContractEvent(address) {
    await instance.addContractEvent(address)
    const isExisted=await contractService.existContract(address)
    if (!isExisted) {
        await contractService.createContract({contractAddress: address})
    }
}

// instance = newCreationEventManager()
//     .then(() => console.log(`CreationEventManager has created successfully`))
//     .catch(e => console.log(`CreationEventManager create fail:${e}`))
//     .finally(() => console.log())

module.exports = {
    addContractEvent,
};

async function initialCreationEventManager(manager) {
    let contractInfo = await contractService.findAllContract()
    console.log(contractInfo)
    for (let info of contractInfo) {
        let address = info.contractAddress
        await manager.addContractEvent(address)
            .then(() => console.log(`CreationEventManager add address(${address}) successfully`))
            .catch(e => console.log(`CreationEventManager add address(${address}) fail:${e}`))
            .finally(() => console.log())
    }
}

function callbackForMint(address) {
    return async (productId, tokenId, count) => {
        console.log(`Mint event Listener:\n
            productId:${productId}\n
            contract:${address}\n
            token:${tokenId.toString()}\n
            count:${count}\n`)
        await factoryService.manufactureItem({
            productId: productId,
            contract: address,
            token: tokenId.toString(),
        }).then(() => {
            console.log(`contract:${address}\n
                token:${tokenId}\n:mint successfully!`)
        }).catch((e) => {
            console.log(`contract:${address}\n
                token:${tokenId}\n err: mint ${e.message}`)
        })
    }
}

function callbackForTrade(address) {
    return async (orderId, from, to, tokenId) => {
        console.log(`Mint event Listener:\n
            orderId:${orderId}\n
            contract:${address}\n
            from:${from}\n
            to:${to}\n
            tokenId:${tokenId}\n`
        )
        console.log(`hex:${orderId}`)
        await orderService.confirmOrder({
            orderId: orderId,
            contract: address,
            token: tokenId.toString(),
            from: from,
            to: to,
        }).then(() => {
            console.log(`contract:${address}\n
                token:${tokenId}\n:trade successfully!`)
        }).catch((e) => {
            console.log(`contract:${address}\n
                token:${tokenId}\n err: trade ${e.message}`)
        })
    }
}
