const {mongodb} = require("../../pkg/mongo");
const mongoose = require('mongoose');
const Schema=mongoose.Schema
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    _id: ObjectId,
    address: String,
});

Contract = mongodb.model('contract', schema,'contract');


module.exports=Contract
