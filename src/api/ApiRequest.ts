import axios from "axios";

export default axios.create({
    url: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
});