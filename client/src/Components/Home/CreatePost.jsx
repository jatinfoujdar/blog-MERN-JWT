import { Box, Button, FormControl,  InputBase, TextareaAutosize } from '@mui/material'
import React from 'react'
import { createpostimage } from '../../Config/constant'
import styled from '@emotion/styled'
import {AddCircle as Add} from '@mui/icons-material';

const Container = styled(Box)`
margin: 50px 100px
`

const Image = styled("img")({
    width: "100%",
    height: "50vh",
    objectFit: "cover"
})

const StyledFormControl = styled(FormControl)`

margin-top: 10px;
display: flex;
flex-direction: row;
`
const InputTextField = styled(InputBase)`
flex: 1;
margin: 0 30px;
font-size: 25px;
`

const CreatePost = () => {
  return (
   
    <Container>
        <Image src={createpostimage} alt='creatpost'/>
        <StyledFormControl>
            <label htmlFor='fileInput'>
                <Add fontSize='large' color='action'/>
            </label>
            <input type='file'
            id='fileInput'
            style={{display: 'none'}}/>
            <InputTextField placeholder='title'/>
            <Button variant='contained'>Publish</Button>
        </StyledFormControl>
        <TextareaAutosize 
        minRows={5}
        placeholder='Tell your Story....'
        />
    </Container>

  )
}

export default CreatePost