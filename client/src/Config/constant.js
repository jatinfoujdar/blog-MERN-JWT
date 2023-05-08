export const LogoIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVDOKbmDKHqL-bLn1rdci2pQW9rlCt3FvWQ&usqp=CAU";
//api notification message

export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title: "loading...",
        message: "data is loading"
    },
    success:{
       title: "success ",
       message: " data successfully"
    },
    resFailure:{
        title: "Error",
        message: "Error occured while fetching  parsing res data"
    },
    reqFailure:{
        title: "Error",
        message: "an error occured while parsing req data"
    },
    networkError:{
        title: "Error",
        message: "unable to connect to server "
    }
}


//Api service call
//sample req
//need service call :{url : "/",method : "put/get/put/delete" params: t/f , query: t/f}

export const SERVICE_URLS={
    userSignup:{url: "/signup",method: "POST"}
}