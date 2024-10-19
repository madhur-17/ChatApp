import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/SignIn"
import SignUp from "./Pages/SignUP/SignUp"



function App() {
  return (
    <div className="flex h-screen justify-center items-center p-4">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App
