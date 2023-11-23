import {createContext, useState, useRef, useEffect} from "react";
import * as UsersService from "../utilities/users-service";
import * as usersAPI from "../utilities/users-api";

const User = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [questionnaire, setQuestionnaire] = useState(null)

    useEffect(() => {
        async function getUser() {
            if (!user) {
                const results = await UsersService.getUser();
                setUser(results);
            }
            if (user) {
                const quest = await usersAPI.getQuestionnaire(user._id);
                setQuestionnaire(quest)
            }
        }
        getUser();
    }, [user])

    return (
        <User.Provider value={{user , setUser, questionnaire, setQuestionnaire }}>
            {children}
        </User.Provider>
    )
}

export { User, UserContext };