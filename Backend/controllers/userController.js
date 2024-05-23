const asyncHandler=require("express-async-handler");
const userModel=require("../models/userModel");

const register=asyncHandler(async(req,res)=>{
    const {email,name,password}=req.body;

    if(!name||!password||!email){
        res.status(400).json({message:"Please provide all the deatils!"});
    }

    const user=await userModel.findOne({email});

    if(user){
        res.status(400).json({message:"user already exist with this email!"});
    }

    try {
        const User=await userModel({name,email,password});
        console.log(User)
        await User.save();
        const createdUser= await userModel.findById(User._id).select("-password");
        res.status(200).json({message:"User created successfully.",result:createdUser});
    } catch (error) {
        res.status(400).json({message:"Error while createing user",error:error})
    }
});

module.exports={register}