import React, {FormEvent, useContext, useState} from "react";
import UserContext from "../Context/UserContext";
import ApiRequest from "../../api/ApiRequest";

function LoginPage() {

    const [nickName, setNickName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const request = await ApiRequest.post("/auth/login", {
            nickname: nickName,
            password: password
        });
        if (request.status !== 200) return;

        setUser({uuid: 11111});
        console.log(request);
    };
    return (

        <div className="bg-white w-1/3 self-center rounded shadow-lg px-8 py-6 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"username"}>
                        Username
                    </label>
                    <input
                        value={nickName}
                        onChange={(event => {
                            setNickName(event.target.value);
                        })}
                        type={"text"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"username"}/>
                    <p className={"mt-2 italic text-xs text-red-500"}>Please write a username.</p>
                </div>

                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"password"}>
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={(event => {
                            setPassword(event.target.value);
                        })}
                        type={"password"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"password"}/>
                    <p className={"mt-2 italic text-xs text-red-500"}>Please write a password.</p>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="button">
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>

    );
}

export default LoginPage;