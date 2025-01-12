import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully : ${conn.connection.host}`)
    }
    catch(error){
        console.error("Connection error", error);
    }
}

