import React from 'react'
import { Box, Grid } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

export default function Layout(props) {
  return (
    <Grid templateColumns="80px auto" h="100vh" pos="relative">
      <Navbar />
      <Box>
        <Topbar />

        <Box p="25px">
          {props.children}
        </Box>
      </Box>
    </Grid>
  )
}