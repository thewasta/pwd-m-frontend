import React, {useContext, useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import ApiRequest from "../../../api/ApiRequest";
import UserContext from "../../Context/UserContext";
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
    const userContext = useContext(UserContext);
    const [passwordsList, setPasswordsList] = useState<iPasswordList[]>([]);
    useEffect(() => {
        ApiRequest.post("/password/all",
            {
                user: userContext.user.user?.uuid
            }).then(response => {
            setPasswordsList(response.data);
        });
    }, []);
    return (
        <div className={"p-4"}>
            <Switch>
                <Route path={"/view"} render={(props => <PasswordList {...props} passwordsList={passwordsList}/>)}/>
            </Switch>
        </div>
    );
};

export default ContentComponent;
