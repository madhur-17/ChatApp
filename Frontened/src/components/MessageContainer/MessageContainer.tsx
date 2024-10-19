import MessageInput from "./MessageInput"
import Messages from "./Messages"


const MessageContainer = () => {
  const NoChatSelected=false
  return (
    <div className="min-w-[450px] flex flex-col">
        {NoChatSelected?(<NoChatSelectedMessage/>):(
          <>
          <div className="bg-slate-500 px-4 py-2 gap-x-1 flex items-center">
            <span className="label-text ">To:</span>
            <span className="text-gray-900 font-bold">Madhur</span>
        </div>

        <Messages/>
        <MessageInput/>
          </>
        )}
    </div>
  )
}

export default MessageContainer


const NoChatSelectedMessage=()=>{
  return(
    <div className="text-black items-center justify-center flex my-auto font-extrabold">
      Welocome Madhur
    </div>
  )
}