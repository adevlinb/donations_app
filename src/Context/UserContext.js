import {createContext,useState} from "react";

const User = createContext();

const UserContext = ({children}) => {
    const [user,setUser] = useState("");

    return (
        <User.Provider value={{user , setUser}}>
            {children}
        </User.Provider>
    )
}

export {User,UserContext};