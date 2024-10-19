

const MessageTemplate = () => {
  return (
    <>
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img  src="https://avatar.iran.liara.run/public/girl?"/>

            </div>

        </div>
        <div className="chat-bubble bg-green-400 text-white"> Hi </div>
        <div className="chat-footer text-emerald-50">12-56</div>
    </div>
    <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img  src="https://avatar.iran.liara.run/public/girl?"/>

            </div>

        </div>
        <div className="chat-bubble bg-slate-700 "> Hello</div>
        <div className="chat-footer text-emerald-50">12-56</div>
    </div>
    </>
  )
}

export default MessageTemplate
