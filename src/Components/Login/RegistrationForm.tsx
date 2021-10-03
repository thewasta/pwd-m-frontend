import React, {useState} from "react";
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    const [nickName, setNickName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const handleSubmit = () => {

    };
    return (
        <div className="bg-white md:w-1/3 lg:w-1/4 self-center rounded shadow-lg px-8 py-6 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"mail"}>
                        Mail *
                    </label>
                    <input
                        value={mail}
                        onChange={(event => {
                            setMail(event.target.value);
                        })}
                        type={"text"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"mail"}/>
                </div>
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
                </div>
                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"confirm-password"}>
                        Password *
                    </label>
                    <input
                        autoComplete={"off"}
                        value={confirmPassword}
                        onChange={(event => {
                            setConfirmPassword(event.target.value);
                        })}
                        type={"password"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"confirm-password"}/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                        Register
                    </button>
                    <Link to={"/login"}
                          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                        I have account!
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
