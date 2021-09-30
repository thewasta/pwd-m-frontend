import {createContext} from "react";

interface iUserContext {
    user: object | null;
    setUser: any;
}

let initState: iUserContext = {
    user: null,
    setUser: null
};

const UserContext = createContext(initState);

export default UserContext;