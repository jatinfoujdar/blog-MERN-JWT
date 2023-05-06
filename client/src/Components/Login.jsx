import React, { useState } from 'react';
import {Box, TextField, Button, styled,Typography} from "@mui/material";
import { LogoIMG } from '../Config/constant';


const Component = styled(Box)`
 width: 400px;
 margin: auto;
 box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
 `

 const Image = styled("img")({
  width: 100,
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

const Login = () => {
  const [account , setAccount] = useState("login");

  const toggleSignup=()=>{
    account === "signup" ? setAccount("login"): setAccount ("signup");
  }
  return (
    <Component>
     <Box>
      <Image src={LogoIMG} alt='logo'/>
  {
        account === "login" ? 
      
       <Wrapper>
      <TextField variant="standard" label="Enter Your Username"/>
      <TextField variant="standard" label="Enter Your Password"/>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography level="h2" style={{textAlign: "center"}}>OR</Typography>
      <LoginButton onClick={()=> toggleSignup()} variant="contained">Create an Account</LoginButton>
      </Wrapper> 
      :
      <Wrapper>
      <TextField variant="standard" label="Enter Your Name"/>
      <TextField variant="standard" label="Enter Your Username"/>
      <TextField variant="standard" label="Enter Your Password"/>

      <LoginButton variant="contained">Signup</LoginButton>
      <Typography level="h2" style={{textAlign: "center"}}>OR</Typography>
      <LoginButton onClick={()=> toggleSignup()} variant="contained">Already have an Account</LoginButton>
      </Wrapper>
}
     </Box>
    </Component>
  )
}

export default Login