import {  createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import io,{Socket } from "socket.io-client";

type SocketContextType={
    socket:Socket|null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onlineUsers: any[];

}


export const SocketContext=createContext<SocketContextType>({
    socket:null,
    onlineUsers:[],
});

export const SocketContextProvider=({children}:{children:React.ReactNode})=>{
    const [socket,setSocket]=useState<Socket|null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [onlineUsers,setOnlineUsers]=useState<any[]>([]);
    const {authUser}=useContext(AuthContext);

    useEffect(() => {
        
        if (authUser) {
            const socket = io("http://localhost:3000", {
				query: {
					userId: authUser,
				},
			});

			setSocket(socket);

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}