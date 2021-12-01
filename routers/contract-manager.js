var express = require('express');
var router = express.Router();

const {contractManagerController}=require('../controllers');
router.post('/addCreationEvent',contractManagerController.addCreationEvent);
module.exports = router;
