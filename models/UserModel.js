const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
name:{type:String,required:true},
email:{type:String},
password:{type:String},
role:{type:String,required:true},
phone:{type:Number},
address:{type:String} ,
state: {type:String},

pincode: {type:Number},
 city: {type:String}
},{
    versionKey:false
})


const UserModel = mongoose.model("/user",userSchema)

module.exports={
    UserModel
}