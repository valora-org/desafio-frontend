import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box, Heading, Flex, Button, Stack, IconButton, Input } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoAdd } from 'react-icons/io5'

import PriceChart from '../components/PriceChart'
import RecentSearchs from '../components/RecentSearchs'
import MyWallet from '../components/MyWallet'

export default function Dashboard() {
  return (
    <MainLayout>
      <Box mb="10">
        <PriceChart />
      </Box>
      <Box mb="10">
        <RecentSearchs />
      </Box>
      <Box mb="10">
        <MyWallet />
      </Box>
    </MainLayout>
  )
}