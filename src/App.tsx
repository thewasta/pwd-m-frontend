import React, {useEffect, useReducer} from "react";
import UserContext from "./Components/Context/UserContext";
import AppRouter from "./routes/AppRouter";
import {authReducer} from "./hooks/auth/authReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("user") as string) || {logged: false};
};

function App() {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{user, dispatch}}>
            {
                user.logged ?
                    <div className={"relative bg-gray-50 min-h-screen md:flex"}>
                        <AppRouter/>
                    </div> :
                    <div className={"flex bg-gray-50 justify-center overscroll-none h-screen w-screen"}>
                        <AppRouter/>
                    </div>
            }

        </UserContext.Provider>
    );
}

export default App;
