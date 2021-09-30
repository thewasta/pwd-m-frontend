import React, {useState} from "react";
import UserContext from "./Components/Context/UserContext";
import LoginPage from "./Components/Login/LoginPage";

function App() {

    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user, setUser}}>
            <LoginPage/>
        </UserContext.Provider>
    );
}

export default App;
