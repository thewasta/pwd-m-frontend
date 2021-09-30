import React, {FormEvent, useContext, useState} from "react";
import UserContext from "../Context/UserContext";
import ApiRequest from "../../api/ApiRequest";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const request = await ApiRequest.post("/auth/login", {
            nickname: user,
            password: password
        });
        if (request.status !== 200) return;

        setUser({uuid: 11111});
        console.log(request);
    };
    return (
        <div>
            <form onSubmit={(event => handleSubmit(event))}>
                <input type={"text"} placeholder={"Write your mail"} value={email}
                       onChange={(event) => {
                           setEmail(event.target.value);
                       }}/>
                <input type={"password"} placeholder={"Write your password"} value={password}
                       onChange={(event) => {
                           setPassword(event.target.value);
                       }}/>
                <button type={"submit"}>Entrar</button>
            </form>
        </div>
    );
}

export default LoginPage;