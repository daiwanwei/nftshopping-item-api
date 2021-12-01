const express = require('express');
const router = express.Router();

const {factoryController}=require('../controllers');
router.post('/orderItem',factoryController.orderItem);
router.post('/manufactureItem',factoryController.manufactureItem);
router.post('/deliverItem',factoryController.deliverItem);
module.exports = router;
