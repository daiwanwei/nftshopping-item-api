var express = require('express');
var router = express.Router();

const {erc721Controller}=require('../controllers');
router.get('/getNameOfERC721',erc721Controller.getNameOfERC721);
router.post('/approveToken',erc721Controller.approveToken);
router.post('/transferToken',erc721Controller.transferToken);
router.post('/setApprovalForTokens',erc721Controller.setApprovalForTokens);
router.get('/balanceOfToken',erc721Controller.balanceOfToken);
router.get("/getOwnerOfToken",erc721Controller.getOwnerOfToken);
router.get("/isApprovedForTokens",erc721Controller.isApprovedForTokens);
router.get("/getOwnerOfToken",erc721Controller.getOwnerOfToken);
router.get("/tokenURI",erc721Controller.tokenURI);
module.exports = router;
