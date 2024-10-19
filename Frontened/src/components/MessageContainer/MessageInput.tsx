

const MessageInput = () => {
  return (
    <form className="flex items-center w-full gap-x-2 px-4 mb-4">
    <input 
      type="text" 
      placeholder="Message..." 
      className="bg-slate-600 text-white rounded-2xl w-10/12 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <button 
   
      className="bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center w-12 h-12"
    >
      <svg 
        viewBox="0 0 122.56 122.88" 
        className="w-6 h-6 fill-white"
      >
        <path d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"/>
      </svg>
    </button>
  </form>
  
  )
}

export default MessageInput
