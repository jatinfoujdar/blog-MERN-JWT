import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <>
    <Banner/>
    <Grid container>
    <Categories/>
    </Grid>
    </>
  )
}

export default Home