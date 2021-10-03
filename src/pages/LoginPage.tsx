import React from "react";
import {Route, Switch} from "react-router-dom";
import {LoginForm, RegistrationForm, ResetPasswordForm} from "../Components/Login";

const LoginPage = () => {
    return (
        <Switch>
            <Route exact path={"/register"} component={RegistrationForm}/>
            <Route exact path={"/reset-password"} component={ResetPasswordForm}/>
            <Route exact path={"/login"} component={LoginForm}/>
        </Switch>
    );
};

export default LoginPage;
