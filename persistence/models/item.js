const {mongodb} = require("../../pkg/mongo");
const mongoose = require('mongoose');
const Schema=mongoose.Schema

const schema = new Schema({
    _id: {
        contract:String,
        token:String,
    },
    creationId: String,
});

Item = mongodb.model('item', schema,'item');


module.exports=Item
