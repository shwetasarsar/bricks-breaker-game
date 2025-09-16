import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider =({children})=>{
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);

    return(
        <UserContext.Provider value={{score, lives, setScore, setLives}}>
            {children}
        </UserContext.Provider>
    )

}