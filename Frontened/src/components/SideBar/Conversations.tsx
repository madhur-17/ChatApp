import useGetConversations from "../../Hooks/useGetConversations"

import ConversationTemplate from "./ConversationTemplate"


const Conversations = () => {
  const {conv} =useGetConversations();
  //console.log(conv);

  return (
    <div className="p-2 flex flex-col overflow-auto">
      
      {
        conv.map(ele=>{
          return <ConversationTemplate key={ele._id} {...ele}/>
        })
      }
   
    


      
     
      
    </div>
  )
}

export default Conversations
