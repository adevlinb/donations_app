import {createContext,useState} from "react";

const User = createContext();

const UserContext = ({children}) => {
    const [user,setUser] = useState("");
    const [questionnaire, setQuestionnaire] = useState({});

    return (
        <User.Provider value={{user , setUser, questionnaire, setQuestionnaire}}>
            {children}
        </User.Provider>
    )
}

export {User,UserContext};