import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Image = styled(Box)`
background: url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
width: 100%;
height: 50vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
` 
 const Heading = styled(Typography)`
 font-size: 70px;
 line-height: 1
 `
 const SubHeading = styled(Typography)`
 font-size: 20px;

 `


const Banner = () => {
  return (
    <Image>
        <Heading>BLOG</Heading>
        <SubHeading>Jatin Foujdar</SubHeading>
    </Image>
  )
}

export default Banner