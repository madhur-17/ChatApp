import UserLogout from "../../Hooks/userLogout"


const Logout = () => {
 const {logout}=UserLogout();
  return (
    <div className="mt-auto p-6 bg-yellow-200">
      <button onClick={()=>{
       logout();
      }}>LogOut</button>
    </div>
  )
}

export default Logout
