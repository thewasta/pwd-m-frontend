import React, {FormEvent, useContext, useState} from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import UserContext from "../Context/UserContext";
import instance from "../../api/ApiRequest";
import {authTypes} from "../../hooks/auth/authReducer";

interface iLoginPage {
    history: RouteComponentProps["history"];
}

const LoginForm = (props: iLoginPage) => {

    const [nickName, setNickName] = useState("thewasta");
    const [password, setPassword] = useState("passWord12@");
    const [errors, setErrors] = useState("");
    const {dispatch} = useContext(UserContext);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (nickName.length > 0 || password.length > 0) {
            await instance.post("auth/login", {
                nickname: nickName,
                password: password
            }).then(response => {
                const {status} = response.data;
                if (status === "ok") {
                    dispatch({
                        type: authTypes.login,
                        payload: {
                            ...{user: response.data.user}
                        }
                    });
                    props.history.replace("/");
                } else {
                    setErrors("Password or username wrong.");
                }
            });
        } else {
            setErrors("Please fill form.");
        }
    };
    return (
        <div className="bg-white md:w-1/3 lg:w-1/4 self-center rounded shadow-lg px-8 py-6 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"username"}>
                        Username *
                    </label>
                    <input
                        value={nickName}
                        onChange={(event => {
                            setNickName(event.target.value);
                        })}
                        type={"text"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"username"}/>
                </div>

                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"password"}>
                        Password *
                    </label>
                    <input
                        autoComplete={"off"}
                        value={password}
                        onChange={(event => {
                            setPassword(event.target.value);
                        })}
                        type={"password"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"password"}/>
                    {errors.length > 0 ? <p className={"mt-2 italic text-xs text-red-500"}>{errors}</p> : ""}
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                        Sign In
                    </button>
                    <Link
                        to={"/register"}
                        className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                        I need an account!
                    </Link>

                </div>
                <div className="flex items-center justify-end mt-3">
                    <Link
                        to={"/reset-password"}
                        className="inline-block align-baseline font-bold text-xs text-gray-500 hover:text-blue-darker">
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;