import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { categories } from '../../constant/data'

const Categories = () => {
  return (
    <div>
        <>
        <Button>Create Blogs</Button>
        <Table>
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
        </Table>
        </>
    </div>
  )
}

export default Categories