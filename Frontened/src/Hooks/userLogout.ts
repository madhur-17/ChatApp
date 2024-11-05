import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";



const UserLogout=()=>{
    const [loading,setloading]=useState(false);
    const {setAuthUser} =useContext(AuthContext);
    const logout=async()=>{
        try{
            setloading(true);
            const res=await fetch("api/auth/logout",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data=await res.json();
            if(data.error){
                throw new Error("error while logout")
            }
            setAuthUser(null);
            localStorage.removeItem("chat-user");
            toast.success("Logged Out");

        }
        catch(error){
            console.log(error)

        }
        finally{
            setloading(false);
        }
    }

    return {loading,logout}

}

export default UserLogout;