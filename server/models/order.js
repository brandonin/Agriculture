var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
 name: String,
 product: String,
 quantity: Number,
 created_at: Date
})
var Order = mongoose.model('Order', OrderSchema);