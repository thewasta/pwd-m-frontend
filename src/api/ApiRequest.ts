import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});
export default instance;