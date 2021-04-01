import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box } from '@chakra-ui/react'

import PriceChart from '../components/PriceChart'
import RecentSearchs from '../components/RecentSearchs'
import MyWallet from '../components/MyWallet'
import { motion, AnimateSharedLayout } from 'framer-motion'

export default function Dashboard() {
  const animation = {
    in: index => ({
      opacity: 1,
      y: 0,
      transition: { type: 'linear', delay: index * 0.1 },
    }),
    out: index => ({
      opacity: 0,
      y: 20,
      transition: { type: 'linear', delay: index * 0.05 },
    }),
  }
  return (
    <MainLayout>
      <AnimateSharedLayout>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animation}
          custom={1}
        >
          <Box mb="5">
            <PriceChart />
          </Box>
        </motion.div>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animation}
          custom={2}
        >
          <Box mb="5">
            <RecentSearchs />
          </Box>
        </motion.div>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animation}
          custom={3}
          layout
        >
          <Box mb="10">
            <MyWallet />
          </Box>
        </motion.div>
      </AnimateSharedLayout>
    </MainLayout>
  )
}