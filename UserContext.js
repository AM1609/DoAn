import {createContext,useState} from "react";

const UserType = createContext();

const UserContext = ({children}) => {
    const [useremail,setUseremail] = useState("");
    return (
        <UserType.Provider value={{useremail,setUseremail}}>
            {children}
        </UserType.Provider>
    )
}

export {UserType,UserContext};