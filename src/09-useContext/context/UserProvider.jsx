import { useState } from "react"
import { UserContext } from "./UserContex"

const user ={
    
}


export const UserProvider = ({children})=>{

    const[user,setUser]=useState();

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}