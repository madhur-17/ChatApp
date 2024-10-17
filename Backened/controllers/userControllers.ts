import { Request,Response } from "express"
import User from "../models/userModel";

export const getAllUsers=async(req:Request,res:Response)=>{
    const userId=req.user._id;

    const allUsers=await User.find({
        _id:{
            $ne:userId
        }
    })

    res.status(200).json(allUsers);
}