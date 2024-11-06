import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages"
import MessageTemplate from "./MessageTemplate"
import useListenMessages from "../../Hooks/useListenMessages";


const Messages = () => {
  const {messages}=useGetMessages();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastMessage=useRef<any>();
  useListenMessages();
  useEffect(()=>{
    lastMessage.current?.scrollIntoView({behavior:"smooth"})
  },[messages])

  
  return (
    <div className="custom-scrollbar overflow-auto">
      {
        messages.length==0?<h1 className="w-full text-white">Start Conversation</h1>:(messages.map((ele)=>{
        
          return <div key={ele._id} ref={lastMessage}>
            <MessageTemplate  {...ele}/>
           
  
            </div>
        }))
      }
     
    </div>
  )
}

export default Messages
