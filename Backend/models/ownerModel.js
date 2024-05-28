const mongoose=require("mongoose");

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        minLength:3,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    products:{
        type:Array,
        required:true
    },
    picture:{
        type:String
    },
    gstin: {
        type: String,
    }
}, { timestamps: true });

module.exports=mongoose.model("Owner",ownerSchema);
