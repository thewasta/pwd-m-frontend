import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import UserContext from "../Components/Context/UserContext";
import PublicRouter from "./PublicRouter";
import LoginPage from "../Components/Login/LoginPage";
import PrivateRouter from "./PrivateRouter";
import HomePage from "../Components/Home/HomePage";

const {useContext} = React;

const AppRouter = () => {
    const {user} = useContext(UserContext);

    return (
        <Router>
            <Switch>
                <PublicRouter isAuthenticated={user.logged} exact path="/login" component={LoginPage}/>
                <PrivateRouter isAuthenticated={user.logged} component={HomePage} path={"/"}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;
