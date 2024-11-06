import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation"


const useSendMessage = () => {


    const {selectedConversation,messages,setMessages}=useConversation();

    const sendMessage=async(message:string)=>{
           try{
            const data=await fetch(`/api/messages/send/${selectedConversation?._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            }).then(res=>res.json());
            setMessages([...messages,data])
           }
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
           catch (e: any) {
            toast.error(e?.message || "An unexpected error occurred");
          }
          
    }

    return sendMessage;

  
}

export default useSendMessage