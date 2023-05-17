import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { categories } from '../../constant/data';
import styled from '@emotion/styled';

const StyledTable = styled(Table)`
border: 1px solid rgba(224 ,224 ,224,1);
`

const StyledButton = styled(Button)`
margin: 20px;
width: 85%;
background: #03b6fc;
color: #fff;
`

const Categories = () => {
  return (
    <div>
        <>
        <StyledButton variant='contained'>Create Blogs</StyledButton>
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categorious
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
           categories.map(category =>(
                            <TableRow key={category.id}>
                            <TableCell>
                            {category.type}
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