import axios from "axios";

export default axios.create({
    withCredentials: true,
    baseURL: 'https://portfolio-backend-production-b665.up.railway.app'
})