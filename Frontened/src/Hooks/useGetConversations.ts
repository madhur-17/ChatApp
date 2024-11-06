import { useEffect, useState } from "react";
import { ConversationType } from "../Types/Types";




const useGetConversations=()=>{
    const [loading,setLoading]=useState(false);

    const [conv,setConv]=useState<ConversationType[]>([]);

    const getConversation=async()=>{
        try{
                setLoading(true);
                const data=await fetch("/api/users",{
                    method:"GET"}).then(res=>res.json());
                setConv(data);
    
        }
        catch(e){
            console.log(e);
        }
        finally{
            setLoading(false);
        }

    }
    useEffect(() => {
        getConversation();
    }, []);
    
    return {loading,conv};



}

export default useGetConversations;