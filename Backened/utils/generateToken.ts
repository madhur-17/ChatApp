import jwt from "jsonwebtoken";
import { Response } from "express";


const gnerateToken =(userId:string,res:Response)=>{
    const secret=process.env.JWT_SECRET;
    if(!secret){
        res.status(500);
        return;
    }
    const token=jwt.sign({userId},secret,{expiresIn:'15d'})
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true //prevent XSS attacks or cross-site scripting attacks 
    })
}