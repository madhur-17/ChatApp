import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from "./Pages/SignUP/SignUp"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"



function App() {
  const {authUser}=useContext(AuthContext);
  return (
    <div className="flex h-screen justify-center items-center p-4">
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to={"/signin"}/>} />
        <Route path="/signin" element={authUser?<Navigate to="/"/>:<SignIn/>} />
        <Route path="/signup" element={authUser?<Navigate to="/"/>:<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App
