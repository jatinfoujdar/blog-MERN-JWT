import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { categories } from '../../constant/data';
import styled from '@emotion/styled';
import { Link, useSearchParams } from 'react-router-dom';

const StyledTable = styled(Table)`
border: 1px solid rgba(224 ,224 ,224,1);
`

const StyledButton = styled(Button)`
margin: 20px;
width: 85%;
background: #03b6fc;
color: #fff;
`
const StyledLink = styled(Link)`
text-decoration: none;
`

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category= searchParams.get("category");
  return (
    <div>
        <>
        <StyledLink to={`/create?category=${category || ``}`} >
        <StyledButton variant='contained'>Create Blogs</StyledButton>
        </StyledLink>
      
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <StyledLink to="/">
                             All Categorious
                        </StyledLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
           categories.map(category =>(
                            <TableRow key={category.id}>
                            <TableCell>
                                <Link to={`/?category=${category.type}`}>
                            {category.type}
                            </Link>
                            </TableCell>
                            </TableRow>
                        ))
                    }
               
                
            </TableBody>
        </StyledTable>
        </>
    </div>
  )
}

export default Categories