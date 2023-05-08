import axios from "axios";
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from "../Config/constant";

const API_URL = "http://localhost:4000";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})


axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function(response){
       //stop global loader here
       return processResponce(response)
    },
    function (error){
        return Promise.reject(processError(error))
    }
)

const processResponce = (res) => {
    if(res?.status === 200){
        return{isSucess: true, data: Response.data}
    }else{
        return{
        isFailure: true,
        status: res?.status,
        msg: res?.msg,
        code: res?.code,    
    }
    }
}

const processError = (error) =>{
      if (error.res) {
        //req made and server responded with a status
        console.log("error in res",error.toJSON());
        return{
            isError :true,
            msg : API_NOTIFICATION_MESSAGES.resFailure,
            code: error.res.status

        }
      } else if(error.req){
        //req made but no response was received
        console.log("error in req",error.toJSON());
        return{
            isError :true,
            msg : API_NOTIFICATION_MESSAGES.networkError,
            code: ""

        }
      }else{
        //something happned in setting up
        console.log("error in res",error.toJSON());
        return{
            isError :true,
            msg : API_NOTIFICATION_MESSAGES.resFailure,
            code: ""
        }
        
      }
}


const API = {};

for(const [key,value]of Object.entries(SERVICE_URLS)){
    API[key] = (body,showUploadProgress,showDownloadProgress)=>
        axiosInstance({
            method: value.method,
            url:value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted =  Math.round((progressEvent.loaded)/ progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownProgress: function (progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted =  Math.round((progressEvent.loaded)/ progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
    
}

export {API};