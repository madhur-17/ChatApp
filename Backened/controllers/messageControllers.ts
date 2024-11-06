import { Request,Response } from "express"
import Conversation from "../models/conversationMode";
import Message from "../models/messagemodels";
import { getReceiverSocketId, io } from "../socket/socket";



export const sendMessage=async(req:Request,res:Response)=>{
    try{
        const {message}=req.body;
        const {id :receiverId}=req.params;
        const senderId=req.user._id;

       let conservation= await Conversation.findOne({
            participants:{
                $all:[senderId,receiverId]
            }
        })

        if(!conservation){
            conservation=await Conversation.create({
                participants:[senderId,receiverId],
                messages: [],
            })
        }
        const newmessage=new Message({
            senderId,
            receiverId,
            message
        })
        await newmessage.save();

        if(newmessage){
            conservation.messages.push(newmessage._id);
            await conservation.save();
        }

        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newmessage);
		}

        res.status(200).json(newmessage)
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const getMessage=async(req:Request,res:Response)=>{
   try{
    const {id : receiverId }=req.params;
    const senderId=req.user?._id;

    const conversation=await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    }).populate("messages");
    
    if(!conversation){
        res.status(200).json([])
        return;
    }

    
    res.status(200).json(conversation.messages)
   }
   catch(error){
    console.log("error in message");
    res.status(500).json({success:false})
    return;
   }
}