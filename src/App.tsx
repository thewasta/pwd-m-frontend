import React, {useState} from "react";
import UserContext from "./Components/Context/UserContext";
import LoginPage from "./Components/Login/LoginPage";

function App() {

    const [user, setUser] = useState({});
    return (

        <UserContext.Provider value={{user, setUser}}>
            {/*flex justify-center h-screen*/}
            <div className={"flex justify-center overscroll-none h-screen w-screen"}>
                <LoginPage/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
