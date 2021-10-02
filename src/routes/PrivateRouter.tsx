import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";

interface iPrivateRouter {
    isAuthenticated: boolean;
    component: () => any;

    [key: string]: any;
}

const PrivateRouter = ({isAuthenticated, component: Component, ...rest}: iPrivateRouter): JSX.Element => {
    return (
        <Route
            {...rest}
            component={(props: JSX.IntrinsicAttributes) => (
                (isAuthenticated) ? <Component {...props}/> : (<Redirect to={"/login"}/>)
            )}
        />
    );
};

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PrivateRouter;

