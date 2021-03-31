import React from 'react'
import { Box, Grid, Text, Flex } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

import useLayout from '../hooks/use-layout'

import { AnimateSharedLayout, motion } from 'framer-motion'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Layout(props) {

  const { isMobile, menuIsOpen } = useLayout()

  const navbarVariants = {
    normal: { width: isMobile ? 60 : 80 },
    expand: { width: isMobile ? 100 : 200 },
  }

  const bodyVariants = {
    normal: { width: isMobile ? 'calc(100vw - 60px)' : 'calc(100vw - 80px)' },
    expand: { width: isMobile ? 'calc(100vw - 60px)' : 'calc(100vw - 200px)' },
  }

  return (
    <Box>
      <Box
        d="flex"
        pos="relative"
      >
        <motion.div
          variants={navbarVariants}
          animate={menuIsOpen ? 'expand' : 'normal'}
          transition={{ type: 'linear' }}
          style={{
            display: 'inline-block',
            zIndex: "50",
            backgroundColor: '#EDF2F7'
          }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          variants={bodyVariants}
          animate={menuIsOpen ? 'expand' : 'normal'}
          transition={{ type: 'linear' }}
          style={{
            width: isMobile ? 'calc(100vw - 60px)' : 'calc(100vw - 80px)'
          }}
        >
          <Box>
            <Topbar />

            <Scrollbars style={{ width: '100%', height: isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 100px)' }} >
              <Box p={['10px', '10px', '25px']}>
                {props.children}
              </Box>
            </Scrollbars>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}