const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    imageURL:{type:String},
    productName:{type:String},
    strikedPrice:{type:String},
    price:{type:String},
    itemGender:{type:String},
    itemCategory:{type:String},
    sale:{type:String},
    quantity:{type:Number,required:true},
    user:{type:String,required:true},
    status:{type:String,required:true},
    orderDate:{type:String,required:true},
    address:{type:String,required:true},
    pid:{type:String,required:true},
  totalDiscountPrice:{type:Number,required:true}

    

},{
    versionKey:false
})


const OrderModel = mongoose.model("/order",orderSchema)

module.exports={
    OrderModel
}