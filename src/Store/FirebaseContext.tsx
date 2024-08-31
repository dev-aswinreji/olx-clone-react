import { createContext, useState } from "react";

export const FirebaseContext = createContext<any|null>(null)

export const AuthContext = createContext<any|null>(null)


export default function Context ({children}){
    const [user,setUser] = useState()

    return (
        <AuthContext.Provider value={{user,setUser}} >
            {children}
        </AuthContext.Provider>
    )
}