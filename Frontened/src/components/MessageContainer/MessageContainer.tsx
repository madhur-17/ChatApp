import { useEffect } from "react";
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"


const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation();

  useEffect(()=>{
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
 
  return (
    <div className="min-w-[450px] flex flex-col">
        {!selectedConversation?(<NoChatSelectedMessage/>):(
          <>
          <div className="bg-slate-500 px-4 py-2 gap-x-1 flex items-center">
            <span className="label-text ">To:</span>
            <span className="text-gray-900 font-bold">{selectedConversation.userName}</span>
        </div>
        <div className="flex-1 overflow-auto custom-scrollbar">
            <Messages />
          </div>

         
          <div className="sticky bottom-0">
            <MessageInput />
          </div>
          </>
        )}
    </div>
  )
}

export default MessageContainer


const NoChatSelectedMessage=()=>{
  return(
    <div className="text-black items-center justify-center flex my-auto font-extrabold">
      Welocome
    </div>
  )
}