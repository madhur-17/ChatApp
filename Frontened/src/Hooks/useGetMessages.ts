import { useEffect } from "react";
import useConversation from "../zustand/useConversation"


function useGetMessages() {
 
    const {messages,setMessages,selectedConversation}=useConversation();

    useEffect(()=>{
        const getMessage=async()=>{

            const data=await fetch(`/api/messages/${selectedConversation?._id}`).then(res=>res.json());
            setMessages(data);
        }
        
        if(selectedConversation?._id) getMessage();
    },[selectedConversation?._id,setMessages])

    return {messages};
    
}

export default useGetMessages