import React from "react";
import {Route, Switch} from "react-router-dom";
import PasswordList from "./PasswordList/PasswordList";

interface iPasswordList {
    domain: string;
    iv: string;
    password: string;
    set_timestamp: string;
    user_id: string;
    uuid: string;
}

const ContentComponent = () => {

    return (
        <div className={"p-4 w-full"}>
            <Switch>
                <Route path={"/view"} component={PasswordList}/>
            </Switch>
        </div>
    );
};

export default ContentComponent;
