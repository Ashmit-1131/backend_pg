const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    imageURL:{type:String},
    productName:{type:String},
    strikedPrice:{type:String},
    price:{type:String},
    itemGender:{type:String},
    itemCategory:{type:String},
    sale:{type:String}
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("/cart", cartSchema);

module.exports = {
  CartModel,
};