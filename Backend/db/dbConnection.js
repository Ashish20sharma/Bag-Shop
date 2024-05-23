const mongoose=require("mongoose");
const URL=process.env.MONGODB;

const connectDb=async()=>{
    try {
        const connectDB=await mongoose.connect(URL);
        console.log(`Connected to mongoDb ${connectDB.connection.host}`);
    } catch (error) {
        console.log("Db Connection error",error)
    }
}

module.exports=connectDb;