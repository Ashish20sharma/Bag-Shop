require("dotenv").config();
const express =require("express");
const connectDb = require("./db/dbConnection");
const app=express();
const cors=require("cors");
const cookieParser=require("cookie-parser");
const port=process.env.PORT;
const userRouter=require("./routes/userRoute");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/v1/users",userRouter);

app.listen(port,()=>{
    console.log("server listening 3000")
    connectDb();
})