const express = require('express');
const router = express.Router();

const {orderController}=require('../controllers');
router.post('/createOrder',orderController.createOrder);
router.get('/findAllOrder',orderController.findAllOrder);
router.get('/findOrder',orderController.findOrder);
module.exports = router;
