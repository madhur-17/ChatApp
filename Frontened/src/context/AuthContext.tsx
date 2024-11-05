import React, { createContext, useState } from "react";

type AuthContextProviderType={
  children:React.ReactNode
}

type AuthContextType = {
  authUser: string | null;
  setAuthUser: React.Dispatch<React.SetStateAction<string | null>>;
};
const defaultValue:AuthContextType={
  authUser:"",
  setAuthUser:()=>{}
}

export const AuthContext=createContext(defaultValue);

//const AuthContext=createContext({} as AuthContextType)

const AuthContextProvider=({children}:AuthContextProviderType)=>{

  const [authUser,setAuthUser]=useState<string|null>(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse 'chat-user' from localStorage:", error);
      return null;
    }
  });

  return <AuthContext.Provider value={{authUser,setAuthUser}}>
    {children}
  </AuthContext.Provider>
}


export default AuthContextProvider;