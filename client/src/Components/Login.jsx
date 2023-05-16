import React, { useState } from 'react';
import {Box, TextField, Button, styled,Typography} from "@mui/material";
import { LogoIMG } from '../Config/constant';
import { API } from '../service/api';

const Component = styled(Box)`
 width: 400px;
 margin: auto;
 box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
 `

 const Image = styled("img")({
  width: 120,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
 })

 const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div , & > button,& > p {
    margin-top : 20px
  }
 `

   

 const LoginButton = styled(Button)`
      text-transform: none;
      font-weight: bold;
      height: 48px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
 `
 const Error = styled(Typography)`
      
      font-size: 10px;
      color: #ff6161;
      line-height: 0;
      margin-top: 10px;
      font-weight: 600;

 `
 const loginInitialValues = {
  username : "",
  password : ""
}
const SignupInitialValues = {
  name : "",
  username: "",
  password: "",
 }
const Login = () => {
  const [account , setAccount] = useState("login");
  const [signup , setSignup] = useState(SignupInitialValues);
  const [login , setLogin] = useState(loginInitialValues)
  const [error,setError] = useState("")

  const toggleSignup = () => {
    account === "signup" ? setAccount("login"): setAccount ("signup");
  }

 const onInputChange = (e) => {
   setSignup({...signup,[e.target.name]: e.target.value});
 }

 const signupUser = async() => {
    let response = await API.userSignup(signup);
    if(response.isSuccess){
      setError("")
      setSignup(SignupInitialValues);
      toggleSignup("login");
    }else{
          setError("something went wrong! please try it later");
    }
 }

  const onValueChange = (e)=>{
    // e.target.name is a key
   setLogin({...login,[e.target.name]: e.target.value})
  }
  const loginUser = async() => {
    let response = await API.userLogin(login);
    if(response.isSuccess){
      setError("")
      
    }else{
          setError("something went wrong! please try it later");
    }
  }

  return (
    <Component>
     <Box>
      <Image src={LogoIMG} alt='logo'/>
  {
        account === "login" ? 
      
       <Wrapper>
      <TextField variant="standard" value={login.username} onChange={(e)=> onValueChange(e)} name="username" label="Enter Your Username"/>
      <TextField variant="standard" value={login.password} onChange={(e)=> onValueChange(e)} name="password"  label="Enter Your Password"/>

      {error && <Error>{error}</Error>}
      <LoginButton variant="contained" onClick={()=>{ loginUser()}}>Login</LoginButton>
      <Typography level="h2" style={{textAlign: "center"}}>OR</Typography>
      <LoginButton onClick={()=> toggleSignup()} variant="contained">Create an Account</LoginButton>
      </Wrapper> 
      :
      <Wrapper>
      <TextField variant="standard" name="name" onChange={(e)=> onInputChange(e)} label="Enter Your Name"/>
      <TextField variant="standard" name="username" onChange={(e)=> onInputChange(e)} label="Enter Your Username"/>
      <TextField variant="standard" name="password" onChange={(e)=> onInputChange(e)} label="Enter Your Password"/>
      
      {error && <Error>{error}</Error>}
      <LoginButton onClick={()=> signupUser()} variant="contained">Signup</LoginButton>
      <Typography level="h2" style={{textAlign: "center"}}>OR</Typography>
      <LoginButton onClick={()=> toggleSignup()} variant="contained">Already have an Account</LoginButton>
      </Wrapper>
}
     </Box>
    </Component>
  )
}

export default Login