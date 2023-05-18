import { Box, Button, FormControl,  InputBase, TextareaAutosize } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { createpostimage } from '../../Config/constant'
import styled from '@emotion/styled'
import {AddCircle as Add} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../constant/DataProvider';

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
const Textarea = styled(TextareaAutosize)`
width: 100%;
margin: 50px;
font-size: 18px;
border: none;
`

const initialPost = {
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createdDate:  new Date()
}

const CreatePost = () => {

    const[post,setPost] = useState(initialPost);
    const [file,setFile] = useState("");
    const location = useLocation();
    const {account} = useContext(DataContext);

    useEffect(()=>{
    const getImage = ()=>{
     if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        //api call to upload a image
        //post.picture = ""
     }
    }
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
    },[file])


    const handleChange = (e) =>{
       setPost({...post, [e.target.name]: e.target.value})
    }

  return (
   
    <Container>
        <Image src={createpostimage} alt='creatpost'/>
        <StyledFormControl>
            <label htmlFor='fileInput'>
                <Add fontSize='large' color='action'/>
            </label>
            <input type='file'
            id='fileInput'
            style={{display: 'none'}}
            onChange={(e)=> setFile(e.target.files[0])}
            name='picture'
            />
            <InputTextField placeholder='title' onChange={(e)=> handleChange(e)} name= "title"/>
            <Button variant='contained'>Publish</Button>
        </StyledFormControl>
        <Textarea
        minRows={5}
        placeholder='Tell your Story....'
        onChange={(e)=> handleChange(e)} 
        name= "description"
        />
    </Container>

  )
}

export default CreatePost