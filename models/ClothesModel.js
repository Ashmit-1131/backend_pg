const mongoose = require("mongoose")


const clothesSchema = mongoose.Schema({
imageURL:{type:String},
productName:{type:String},
strikedPrice:{type:String},
price:{type:String},
itemGender:{type:String},
itemCategory:{type:String},
sale:{type:String},
age:{type:String}
},{
    versionKey:false
})


const ClothesModel = mongoose.model("/cloth",clothesSchema)

module.exports={
    ClothesModel
}