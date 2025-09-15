import {createContext} from "react";

const UserContext = createContext({
    score: 0,
    lives: 3
})

export default UserContext;