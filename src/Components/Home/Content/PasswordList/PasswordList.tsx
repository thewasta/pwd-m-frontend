import React, {useContext, useEffect, useState} from "react";
import ApiRequest from "../../../../api/ApiRequest";
import UserContext from "../../../Context/UserContext";
import PasswordComponent from "./PasswordComponent";

interface iPassword {
    domain: string;
    iv: string;
    password: string;
    set_timestamp: string;
    user_id: string;
    uuid: string;
}

const PasswordList = () => {

    const userContext = useContext(UserContext);

    const [passwordsList, setPasswordsList] = useState<iPassword[]>([]);
    useEffect(() => {
        ApiRequest.post("/password/all",
            {
                user: userContext.user.user?.uuid
            }).then(response => {
            setPasswordsList(response.data);
        });
    }, []);

    return (
        <div className={"w-full grid md:grid-cols-3 lg:grid-cols-4 gap-2 sm:grid-cols-1"}>
            {
                passwordsList.map(((value) => (
                    <PasswordComponent value={value}/>
                )))
            }
        </div>
    );
};

export default PasswordList;
