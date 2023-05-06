import axios from "axios";

const API_URL = "http://localhost:4000";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})


axiosInstance.interceptors.req.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.res.use(
    function(res){
       //stop global loader here
    },
    function (error){
        return Promise.reject(error)
    }
)


