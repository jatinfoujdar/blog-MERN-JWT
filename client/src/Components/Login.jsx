import React from 'react';
import {Box, TextField, Button, styled} from "@mui/material";
import { LogoIMG } from '../Config/constant';


const Component = styled(Box)`
 width: 400px;
`

const Login = () => {
  return (
    <Component>
      <img src={LogoIMG} alt='logo'/>
      <TextField variant="standard" />
      <TextField variant="standard" />
      <Button variant="contained">Login</Button>
      <Button variant="contained">Create an Account</Button>
    </Component>
  )
}

export default Login