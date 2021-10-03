import {createContext} from "react";

interface iUserContext {
    user: {
        logged: boolean,
        user?: {
            nick: string
            uuid: string
        } | null
    };
    dispatch: any;
}

let initState: iUserContext = {
    user: {
        logged: false
    },
    dispatch: null
};

const UserContext = createContext(initState);

export default UserContext;