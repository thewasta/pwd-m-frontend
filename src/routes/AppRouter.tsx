import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserContext from "../Components/Context/UserContext";

import {PrivateRouter, PublicRouter} from "./index";
import {HomePage, LoginPage} from "../pages";

const {useContext} = React;

const AppRouter = () => {
    const {user} = useContext(UserContext);

    return (
        <Router>
            <Switch>
                <PublicRouter isAuthenticated={user.logged} exact path="/login" component={LoginPage}/>
                <PublicRouter isAuthenticated={user.logged} exact path="/reset-password" component={LoginPage}/>
                <PublicRouter isAuthenticated={user.logged} exact path="/register" component={LoginPage}/>
                <PrivateRouter isAuthenticated={user.logged} component={HomePage} path={"/"}/>
                <Route path="*">
                    <h2>PAGE NOT FOUND</h2>
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouter;
