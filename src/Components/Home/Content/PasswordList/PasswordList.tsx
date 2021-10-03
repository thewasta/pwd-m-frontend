import React, {useState} from "react";
import ApiRequest from "../../../../api/ApiRequest";

interface iPassword {
    domain: string;
    iv: string;
    password: string;
    set_timestamp: string;
    user_id: string;
    uuid: string;
}

interface iPasswordList {
    passwordsList: iPassword[];
}

const PasswordList = ({passwordsList}: iPasswordList) => {

    const [passwordDecrypt, setPasswordDecrypt] = useState<string>("");
    const [viewPassword, setViewPassword] = useState(false);

    const handleShowPassword = () => {

    };

    const handleDecryptPassword = (password: string, iv: string) => {
        console.log(passwordsList);
        ApiRequest.post("/password/view", {
                password,
                id: iv
            })
            .then(response => setPasswordDecrypt(response.data.password));
    };
    return (
        <div className={"grid sm:grid-rows-1 gap-2"}>
            {
                passwordsList.map(((value) => (
                    <div key={value.iv}
                         className="rounded shadow-md p-4 justify-around items-center flex flex-row bg-white border-r-4 border-red-600">
                        <img src={"http://via.placeholder.com/60"}/>
                        <div className={"p-2 flex flex-col"}>
                            <span className={"font-bold text-md text-gray-800"}>
                                {value.domain}
                            </span>
                            <span className={"text-xs text-gray-500"}>
                                * * * * * * * * *
                            </span>
                        </div>
                        <svg onClick={() => handleDecryptPassword(value.uuid, value.iv)} xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                    </div>
                )))
            }
        </div>
    );
};

export default PasswordList;
