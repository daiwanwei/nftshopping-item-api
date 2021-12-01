const express = require('express');
const router = express.Router();

const {contractController}=require('../controllers');
router.post('/createContract',contractController.createContract);
router.get('/findAllContract',contractController.findAllContract);
router.get('/findContract',contractController.findContract);
module.exports = router;
