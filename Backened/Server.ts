import express,{ Request,Response } from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
//const express=require("express")


import authRoutes from "./routes/authRoutes"
import messageRoutes from "./routes/messageRoutes"
import userRoutes from "./routes/userRoutes"


import connect from "./db/connect";

dotenv.config()

const PORT=process.env.Port || 5000;
const app=express();
app.use(express.json());// parse incoming request with json payloads
app.use(cookieParser());


app.get("/",(req:Request,res:Response)=>{
  res.send("Hello")
})

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use('/api/users',userRoutes);



app.listen(PORT, ()=>{

  connect()
  console.log(`Server Started At Port ${PORT}`)})