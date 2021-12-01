const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(`env(original):${argv.env}`)
const env=argv.env||"local"
console.log(`env:${env}`)

require('dotenv').config({ path: `./config/${env}.env` })

console.log(process.env.MONGODB_HOST)
const config={
    mongo:{
        host:process.env.MONGODB_HOST,
        name:process.env.MONGODB_NAME,
    },
    ethereum:{
        providerURL:process.env.ETHEREUM_PROVIDER_URL,
        web3:{
            accountKey:process.env.WEB3_ACCOUNT_KEY,
            privateKey:process.env.WEB3_PRIVATE_KEY,
        },
    },
    itemDeliverCallback:process.env.ITEM_DELIVER_CALLBACK,
}

module.exports=config

