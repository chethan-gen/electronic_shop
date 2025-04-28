//schema.js
const mongoose = require("mongoose");

const ElectronicSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    price:{type:Number,required:true,default:0},
    quantity:{type:Number,required:true},
    description:{type:String,required:true}
});

const ElectronicModel = mongoose.model("electronic",ElectronicSchema);
module.exports=ElectronicModel;