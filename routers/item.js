const express = require('express');
const router = express.Router();

const {itemController}=require('../controllers');
router.post('/createItem',itemController.createItem);
router.get('/findAllItem',itemController.findAllItem);
router.get('/findItem',itemController.findItem);
module.exports = router;
