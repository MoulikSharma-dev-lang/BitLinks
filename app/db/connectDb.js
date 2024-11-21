import mongoose from "mongoose";

export function connectDb(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB!")
    } catch (error) {
        console.log(error)
    }
}