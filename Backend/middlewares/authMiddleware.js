const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");
const userModel = require("../models/userModel");

const authMiddleware=asyncHandler(async(req,res,next)=>{
    try {
        const token=req.cookies?.accessToken || req.headers("Authorization")?.replace("Berear ","");
        if(!token){
            throw new Error("Token not Found");
        }
        const decoded=jwt.verify(token,process.env.JWT_KEY);
        const user=await userModel.findById(decoded._id).select("-password -refreshToken");
        if(!user){
            throw new Error("Invalid accessToken!");
        }
        req.user=user;
        next();
    } catch (error) {
        throw new Error("Error in Access token",error);
    }
});

module.exports=authMiddleware;