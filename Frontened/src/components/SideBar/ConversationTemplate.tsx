

const ConversationTemplate = () => {
  return (
   <div className="flex flex-col">
     <div className="flex gap-2 items-center hover:bg-lime-500 rounded-sm p-2 cursor-pointer justify-between">
      <div className="flex items-center p-2 gap-x-2 ">
      <div className="avatar online w-12">
        <img src="https://avatar.iran.liara.run/public/girl?" alt="user image" />
      </div>
      <div className="font-serif hover:italic">
        Madhur Agrawal
      </div>
      </div>
      <div>
        😊
      </div>
    </div>
    <div className="divider  rounded-lg m-0 p-0 h-px bg-slate-500"></div>
   </div>
  )
}

export default ConversationTemplate
