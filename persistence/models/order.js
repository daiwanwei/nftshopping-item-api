const {mongodb} = require("../../pkg/mongo");
const mongoose = require('mongoose');
const Schema=mongoose.Schema

const schema = new Schema({
    _id: Schema.ObjectId,
    itemId:{
        contract:String,
        token:String,
    },
    from:String,
    to:String,
    price: String,
    orderStatus:String,
    orderAt: Date,
});

Order = mongodb.model('order', schema,'order');


module.exports=Order
