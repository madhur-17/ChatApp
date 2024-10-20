import { useState } from "react";
import { InputType } from "../Types/Types";
import toast from "react-hot-toast";

const useSignUp=()=>{
    const [loading,setloading]=useState(false);
    
    const signup=async(props:InputType)=>{
        const res=handleErrors(props);
        if(!res) return;
        
        try{
            setloading(true);
            const data=await fetch("api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(props)
            })
            if(!data.ok)
                throw new Error("Signup failed")
            const response=await data.json();
            console.log(response);
        }
        catch(error){
            toast.error("Invalid")
        }
        finally{
            setloading(false)
        }
    }
   

    return {signup,loading};

}





export default useSignUp;


function handleErrors(props:InputType){
    if(!props.userName||!props.confirmpassword||!props.fullName||!props.gender||!props.password){
        toast.error("Fields Necessary")
        return false;
    }
    if(props.password!=props.confirmpassword){
        toast.error("Password not match")
        return false;
    }
    return true;

}