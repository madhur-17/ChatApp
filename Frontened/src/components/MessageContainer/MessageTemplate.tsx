import { useContext } from "react";
import { MessageType } from "../../Types/Types"
import { AuthContext } from "../../context/AuthContext";
import { messageTime } from "../../utils/messageTime";

import useConversation from "../../zustand/useConversation";


const MessageTemplate = ({ senderId, message, createdAt }: MessageType) => {
const {selectedConversation} =useConversation();
const {authUser} =useContext(AuthContext);
const time=messageTime(createdAt);

const fromMe=senderId==authUser?true:false;
const pic=fromMe?" ":selectedConversation?.profilePic
  return (

    <>
    
    <div className={`chat ${fromMe?"chat-end":"chat-start"}`}>
        <div className="chat-image avatar">
            <div className="w-7 rounded-full">
                <img  src={pic}/>

            </div>

        </div>
        <div className={`chat-bubble ${fromMe?"bg-green-400":"bg-slate-700"} text-emerald-50 `}>{message}</div>
        <div className="chat-footer text-emerald-50 text-[0.65rem]">{time}</div>
    </div>
    </>
  )
}

export default MessageTemplate
