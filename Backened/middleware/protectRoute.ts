import jwt,{JwtPayload} from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
import User from "../models/userModel";

interface CustomJwtPayload extends JwtPayload {
    userId: string; 
  }


const protectRoute=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            res.status(401).json({error:"Unauthorized"})
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as CustomJwtPayload;

        if(!decoded){
            res.status(401).json({error:"Unauthorized"})
        }
        const user=await User.findById(decoded.userId).select("-password");
        req.user=user;
        next();
    }
    catch(error){
        console.log("Error in middleware");
        res.status(500).json({message:"Internal Server error",success:false})
    }
}

export default protectRoute;