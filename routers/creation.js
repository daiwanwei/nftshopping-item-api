var express = require('express');
var router = express.Router();

const {creationController}=require('../controllers');
router.get('/getNameOfCreation',creationController.getNameOfCreation);
router.post('/mintCreation',creationController.mintCreation);
router.post('/mintCreationByBatch',creationController.mintCreationByBatch);
router.post('/approveCreation',creationController.approveCreation);
router.post('/tradeCreation',creationController.tradeCreation);
router.post('/transferCreation',creationController.transferCreation);
router.post('/setApprovalForCreations',creationController.setApprovalForCreations);
router.get('/balanceOfCreation',creationController.balanceOfCreation);
router.get("/getApprovedOfCreation",creationController.getApprovedOfCreation);
router.get("/isApprovedForCreations",creationController.isApprovedForCreations);
router.get("/getOwnerOfCreation",creationController.getOwnerOfCreation);
router.get("/creationURI",creationController.creationURI);
module.exports = router;
