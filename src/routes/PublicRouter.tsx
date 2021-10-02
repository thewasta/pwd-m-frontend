import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";

interface iPublicRouter {
    isAuthenticated: boolean;
    component: any;

    [key: string]: any;
}

const PublicRouter = ({isAuthenticated, component: Component, ...rest}: iPublicRouter): JSX.Element => {
    return (
        <Route
            {...rest}
            component={(props: JSX.IntrinsicAttributes) => (
                (!isAuthenticated) ? <Component {...props}/> : (<Redirect to={"/"}/>)
            )}
        />
    );
};

PublicRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PublicRouter;

