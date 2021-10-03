import React, {useState} from "react";
import {Link} from "react-router-dom";

const ResetPasswordForm = () => {
    const [mail, setMail] = useState<string>("");
    const handleSubmit = () => {

    };
    return (
        <div className="bg-white md:w-1/3 lg:w-1/4 self-center rounded shadow-lg px-8 py-6 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className={"block text-gray-500 text-sm font-bold"} htmlFor={"username"}>
                        Mail *
                    </label>
                    <input
                        value={mail}
                        onChange={(event => {
                            setMail(event.target.value);
                        })}
                        type={"text"}
                        className={"shadow border rounded w-full py-2 px-3 text-gray-500"}
                        id={"username"}/>
                    <p className="text-xs mt-2 text-gray-500">
                        If you mail is register. We will send you a mail to reset password.
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                            type="submit">
                        Send Mail
                    </button>
                    <Link
                        to={"/login"}
                        className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
                        I have my password!
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
