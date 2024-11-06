import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';
import gnerateToken from '../utils/generateToken';



export const signupUser=async(req:Request,res:Response):Promise<void>=>{
    try {
     const {fullName,userName,password,gender} =req.body;
     

     const user=await User.findOne({userName})
     if(user){
         res.status(400).json({"message":"user already exists",success:false})
         return;
     }
     
     const salt=await bcrypt.genSalt(10);
     const hashpass=await bcrypt.hash(password,salt);
     
     const profilepic=gender=="male"?`${process.env.PROFILE_BOY}seed=${fullName}`:process.env.PROFILE_GIRL+`seed=${fullName}`;
     const newUser = new User({ fullName, userName, password:hashpass, gender, profilePic:profilepic });
     await newUser.save();
     gnerateToken(newUser._id,res)
     
     res.status(201).json({_id:newUser.id,success:true})
     
    } catch (error) {
        console.log(30);
        res.status(500).json({"message":"Error in signup","success":false})  
        return;                      
    }

    
}

export const signinUser=async(req:Request,res:Response):Promise<void>=>{
    try{
        const {userName,password}=req.body;
        const user=await User.findOne({userName})
        const passIsCorrect= await bcrypt.compare(password,user?.password||"")


        if (!passIsCorrect||!user) {
            res.json({ message: "Incorrect credentials", success: false });
            return;
        }
        gnerateToken(user._id,res)

        res.status(200).json({
            _id:user._id,
            success:true,
        })
        
    }
    catch(error){
        res.status(400).json({"messge":"Error while Signin in"})
        return;
    }

}


export const logoutUser=(req:Request,res:Response)=>{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logged Out"})
}