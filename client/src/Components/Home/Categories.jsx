import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

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
                <TableRow>
                    <TableCell>
                        Music
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    </div>
  )
}

export default Categories