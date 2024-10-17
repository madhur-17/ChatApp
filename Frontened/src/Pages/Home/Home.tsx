import MessageContainer from "../../components/MessageContainer/MessageContainer"
import SideBar from "../../components/SideBar/SideBar"


const Home = () => {
  return (
    <div className="flex h-[550px] rounded-lg backdrop-blur-lg">
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
