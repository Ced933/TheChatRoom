import { createContext, useEffect, useState } from "react";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([])
    useEffect(()=>{

    },[])

    return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
}