const {ACCOUNT_KEY,web3} = require("../pkg/web3");
const CREATION_ABI = require("../data/abi/Creation.json");

const ERC721_ABI = require("../data/abi/ERC721.json");

class Contract {
    constructor(address,abi) {
        if (!web3.utils.isAddress(address)){
            throw new Error("address is invalid")
        }
        this.contract = new web3.eth.Contract(
            abi,
            address,
            { gasLimit: "1000000" }
        );
    }
}

class CreationContract extends Contract{
    constructor(address) {
        super(address,CREATION_ABI);
        this.sender=ACCOUNT_KEY;
    }

    async name() {
        const name = await this.contract.methods
            .name()
            .call()
        return name
    }

    async owner() {
        const owner = await this.contract.methods
            .owner()
            .call()
        return owner
    }

    async mint(productId) {
        const result = await this.contract.methods
            .mint(productId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async mintByBatch(productId,amount) {
        const result = await this.contract.methods
            .mintByBatch(productId,amount)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async approve(to,tokenId){
        const result = await this.contract.methods
            .approve(to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async trade(orderId, from, to, tokenId){
        const result = await this.contract.methods
            .trade(orderId, from, to, tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async safeTransferFrom(from,to,tokenId){
        const result = await this.contract.methods
            .safeTransferFrom(from,to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async transferFrom(from,to,tokenId){
        const result = await this.contract.methods
            .transferFrom(from,to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async setApprovalForAll(operator,approved){
        const result = await this.contract.methods
            .setApprovalForAll(operator,approved)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }


    async balanceOf(owner){
        const balance = await this.contract.methods
            .balanceOf(owner)
            .call()
        return balance
    }

    async getApproved(tokenId){
        const approved = await this.contract.methods
            .getApproved(tokenId)
            .call()
        return approved
    }

    async isApprovedForAll(owner,operator){
        const isApproved = await this.contract.methods
            .isApprovedForAll(owner,operator)
            .call()
        return isApproved
    }

    async ownerOf(tokenId){
        const owner = await this.contract.methods
            .ownerOf(tokenId)
            .call()
        return owner
    }

    async tokenURI(tokenId){
        const uri = await this.contract.methods
            .tokenURI(tokenId)
            .call()
        return uri
    }
}

class ERC721Contract extends Contract{
    constructor(address) {
        super(address,ERC721_ABI);
        this.sender=ACCOUNT_KEY;
    }

    async name() {
        const name = await this.contract.methods
            .name()
            .call()
        return name
    }

    async symbol() {
        const symbol = await this.contract.methods
            .symbol()
            .call()
        return symbol
    }

    async tokenURI(tokenId) {
        const tokenURI = await this.contract.methods
            .tokenURI(tokenId)
            .call()
        return tokenURI
    }

    async approve(to,tokenId){
        const result = await this.contract.methods
            .approve(to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async safeTransferFrom(from,to,tokenId){
        const result = await this.contract.methods
            .safeTransferFrom(from,to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async transferFrom(from,to,tokenId){
        const result = await this.contract.methods
            .transferFrom(from,to,tokenId)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }

    async setApprovalForAll(operator,approved){
        const result = await this.contract.methods
            .setApprovalForAll(operator,approved)
            .send({from:this.sender})
        console.log("Minted creature. Transaction: " + result.transactionHash);
        return result;
    }


    async balanceOf(owner){
        const balance = await this.contract.methods
            .balanceOf(owner)
            .call()
        return balance
    }

    async getApproved(tokenId){
        const approved = await this.contract.methods
            .getApproved(tokenId)
            .call()
        return approved
    }

    async isApprovedForAll(owner,operator){
        const isApproved = await this.contract.methods
            .isApprovedForAll(owner,operator)
            .call()
        return isApproved
    }
}

module.exports={
    CreationContract: CreationContract,
    ERC721Contract,
}
