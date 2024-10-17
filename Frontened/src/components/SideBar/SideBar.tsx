import Conversations from "./Conversations"
import Logout from "./Logout"
import SearchInput from "./SearchInput"


const SideBar = () => {
  return (
    <div className="flex flex-col text-slate-600 border-r border-gray-700 "  >
        <SearchInput/>
      <div className="divider m-0 p-0 h-px"></div>
        <Conversations/>
        <Logout/>
    </div>
  )
}

export default SideBar
