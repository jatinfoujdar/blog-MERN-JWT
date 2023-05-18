import { Box, FormControl } from '@mui/material'
import React from 'react'
import { createpostimage } from '../../Config/constant'
import styled from '@emotion/styled'

const Container = styled(Box)`
margin: 50px 100px
`

const Image = styled("img")({
    width: "100%",
    height: "50vh",
    objectFit: "cover"
})

const CreatePost = () => {
  return (
   
    <Container>
        <Image src={createpostimage} alt='creatpost'/>
        <FormControl>
            <label htmlFor='fileInput'>
                Input
            </label>
            <input type='file'/>
        </FormControl>
    </Container>

  )
}

export default CreatePost