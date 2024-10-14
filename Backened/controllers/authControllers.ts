import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';




export const signupUser=async(req:Request,res:Response):Promise<void>=>{
    try {
     const {fullName,userName,password,gender} =req.body;


     const user=await User.findOne({userName})
     if(user){
         res.status(400).json({"message":"user already exists"})
         return;
     }

     const salt=await bcrypt.genSalt(10);
     const hashpass=await bcrypt.hash(password,salt);

     const profilepic=gender=="male"?`${process.env.PROFILE_BOY}username=${userName}`:process.env.PROFILE_GIRL+`username=${userName}`;
     const newUser = new User({ fullName, userName, password:hashpass, gender, profilePic:profilepic });
     await newUser.save();
     res.status(201).json({_id:newUser.id})
     
    } catch (error) {
       
        res.status(500).json({"message":"Error in signup"})  
        return;                      
    }

    
}