import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <>
    <Banner/>
    <Grid container>
      <Grid item lg={2} xs={12}>
    <Categories/>
    </Grid>
    <Grid container item xs={12} sm={10}>
      Post
    </Grid>
       </Grid>
    </>
  )
}

export default Home