import styled from '@emotion/styled'
import { AppBar, Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Component = styled(AppBar)`
  background: #FF9F4A ;
  `

  const Container = styled(Toolbar)`
    justify-content: center;
    &>a{
        padding: 20px;
        text-decoration: none;
        
    }
  `

const Header = () => {
  return (

      <Component>   
        <Container>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Logout</Link>
        </Container>
      </Component>  

  )
}

export default Header