var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productImage: String,
  productNum: Number,
  salePrice: Number,
  checked: Number,
});

module.exports = mongoose.model('Good', productSchema);
