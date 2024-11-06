import { create } from "zustand";
import { useConverswationType } from "../Types/Types";





const useConversation=create<useConverswationType>((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages},)

}))

export default useConversation;