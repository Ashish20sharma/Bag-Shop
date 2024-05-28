const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String
},{timeseries:true});

module.exports=mongoose.model("Product",productSchema);