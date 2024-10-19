import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const MongoUrl:string|undefined=process.env.MONGO_DB_URL

const connect=async()=>{
    
    try {
        if (!MongoUrl) {
            throw new Error("MongoDB URL is not defined in environment variables.");
        }

        await mongoose.connect(MongoUrl);
        console.log("MongoDb Connected")
    } catch (error:any) {
        console.log("Error while connecting to database",error.message);
    }
}


export default connect;