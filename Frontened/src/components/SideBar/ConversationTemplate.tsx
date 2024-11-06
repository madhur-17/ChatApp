import { useContext, useMemo } from "react";
import { ConversationType } from "../../Types/Types"
import { getRandomEmoji } from "../../utils/emojis";

import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/SocketContext";



const ConversationTemplate = (ele:ConversationType) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id==ele._id;
  const emoji = useMemo(() => getRandomEmoji(), []);

  const {onlineUsers}=useContext(SocketContext);
  const isOnline=onlineUsers.includes(ele._id);
  return (
   <div className="flex flex-col" onClick={()=>setSelectedConversation(ele)}>
     <div className={`flex gap-2 items-center hover:bg-lime-500 rounded-sm p-2 cursor-pointer justify-between ${isSelected&& "bg-lime-500"} `}>
      <div className="flex items-center p-2 gap-x-2 ">
      <div className={`avatar ${isOnline?"online":"offline"} w-12`}>
        <img src={ele?.profilePic} alt="user image" className="rounded-md" />
      </div>
      <div className="font-serif hover:italic">
        {ele?.fullName}
      </div>
      </div>
      <div>
        {emoji}
      </div>
    </div>
    <div className="divider  rounded-lg m-0 p-0 h-px bg-slate-500"></div>
   </div>
  )
}

export default ConversationTemplate
