const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");


const generateToken=async(id)=>{
    try {
        const user=await userModel.findOne(id);
        const accessToken=await user.generateAccessToken();
        const refreshToken=await user.generateRefereshToken();

        user.refreshtoken=refreshToken;
        await user.save({validateBeforeSave:false});
        return {accessToken,refreshToken};
    } catch (error) {
        res.status(500).json({message:"Something went wrong while generating referesh and access token"});
    }
}
const register = asyncHandler(async (req, res) => {
    const { email, name, password } = req.body;

    if (!name || !password || !email) {
        res.status(400).json({ message: "Please provide all the deatils!" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
        res.status(400).json({ message: "user already exist with this email!" });
    }

    try {
        const User = await userModel({ name, email, password });
        await User.save();
        const createdUser = await userModel.findById(User._id).select("-password");
        res.status(200).json({ message: "User created successfully.", result: createdUser });
    } catch (error) {
        res.status(400).json({ message: "Error while createing user", error: error })
    }
});

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Please fill all the field!" })
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        res.status(400).json({ message: "user not found" });
    }
    const verifyPassword = await user.isPasswordCorrect(password);
    if (!verifyPassword) {
        res.status(400).json({ message: "password is wrong." });
    }

    const loggedUser = await userModel.findById(user._id).select("-password");
    const {accessToken,refreshToken}=await generateToken(loggedUser._id)
    console.log(accessToken,refreshToken)
    const options={
        httpOnly:true,
        secure:true
    }
    res.status(200).cookie("accessToken",accessToken,options).cookie("refreshToken",refreshToken,options).json({ message: "Login Success.", result: loggedUser });
});

const logout=asyncHandler(async(req,res)=>{
    const user=await userModel.findOneAndUpdate(
        {_id:req.user._id},
        {
            $set:{refreshtoken:undefined}
        },
        {new:true}
    );
    if(!user){
        res.status(400).json({message:"User not found for logout"});
    }
    
    const options = {
        httpOnly: true,
        secure: true
    }
    res.status(200).clearCookie("accessToken",options).clearCookie("refreshToken",options).json({message:"Logout seccessfully!"});
})

module.exports = { register, login, logout }