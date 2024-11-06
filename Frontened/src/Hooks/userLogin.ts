import { useContext, useState } from "react";
import { SigninType } from "../Types/Types";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";



const useLogin=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useContext(AuthContext);

    const login=async(props:SigninType)=>{
        try{
            setLoading(true);
            const res=await fetch("api/auth/signin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(props)
            })
            const data=await res.json();
            console.log(data);
            if(data.message=="Incorrect credentials"){
                toast.error("Incorrect");
                return;
            }
            localStorage.setItem("chat-user",JSON.stringify(data._id));
            setAuthUser(data._id);

        }
        catch(e){
            console.log(e);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading,login};

}


export default useLogin;