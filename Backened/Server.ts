import express,{ Request,Response } from "express"
import dotenv from "dotenv"
//const express=require("express")
import authRoutes from "./routes/authRoutes"
import connect from "./db/connect";

dotenv.config()

const PORT=process.env.Port || 5000;
const app=express();
app.use(express.json());


app.get("/",(req:Request,res:Response)=>{
  res.send("Hello")
})

app.use("/auth",authRoutes);

app.listen(PORT, ()=>{

  connect()
  console.log(`Server Started At Port ${PORT}`)})