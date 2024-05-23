const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre("save",async function(next){
    if(!this.isModify("password")) return next();
    try {
        this.password=await bcrypt.hash(this.password,10);
        next();
    } catch (error) {
        console.log("Error in bcrypt password",error);
    }
});

module.exports=mongoose.model("User",userSchema);