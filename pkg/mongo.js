const mongoose = require('mongoose');
const config=require('./config').mongo

console.log(`mongo host :${config.host}`)
console.log(`mongo name :${config.name}`)

mongoose.connect(`mongodb://${config.host}/${config.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},)


const mongodb = mongoose.connection;


module.exports={
    mongodb,
}
// const Schema=mongoose.Schema
// const Customer = mongodb.model('Customer', new Schema({ name: String }));
// const session = await mongodb.startSession();
// session.startTransaction();
//
// // This `create()` is part of the transaction because of the `session`
// // option.
// await Customer.create([{ name: 'Test' }], { session: session });
//
// // Transactions execute in isolation, so unless you pass a `session`
// // to `findOne()` you won't see the document until the transaction
// // is committed.
// let doc = await Customer.findOne({ name: 'Test' });
// assert.ok(!doc);
//
// // This `findOne()` will return the doc, because passing the `session`
// // means this `findOne()` will run as part of the transaction.
// doc = await Customer.findOne({ name: 'Test' }).session(session);
// assert.ok(doc);
//
// // Once the transaction is committed, the write operation becomes
// // visible outside of the transaction.
// await session.commitTransaction();
// doc = await Customer.findOne({ name: 'Test' });
// assert.ok(doc);
//
// session.endSession();
