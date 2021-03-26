import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Box, IconButton, Flex, Stack, Text } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { ImHome3 } from 'react-icons/im'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { RiFileChartFill, RiFolderUploadFill } from 'react-icons/ri'
import { FaFileImage } from 'react-icons/fa'
import { FaRegCalendar, FaUserFriends } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { Scrollbars } from 'react-custom-scrollbars';
import useLayout from '../hooks/use-layout'

export default function Navbar() {

  const { isMobile, setMenuIsOpen, menuIsOpen } = useLayout()

  return (
    <Box bgColor="gray.100" h="100vh" pos="relative">
      <Flex pos="fixed" top="0" flexDir="column" zIndex="20" bg="gray.100">
        <IconButton
          icon={<FiMenu size={isMobile ? '25px' : '40px'} color="white" />}
          borderRadius="0"
          w={
            menuIsOpen ?
              ['180px', '180px', '200px']
              :
              ['60px', '60px', '80px']
          }
          h={['80px', '80px', '100px']}
          bg="gray.600"
          _hover={{
            bg: "gray.800"
          }}
          _focus={{
            outline: "none"
          }}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}
        />
        <Scrollbars
          style={{ height: isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 100px)' }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={500}
        >
          <IconButton
            icon={<BiSearchAlt2 size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<ImHome3 size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<RiFileChartFill size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<AiOutlineAreaChart size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<RiFolderUploadFill size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<FaFileImage size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<FaRegCalendar size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<FaUserFriends size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
          <IconButton
            icon={<IoSettingsSharp size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
            bg="transparent"
            _hover={{
              bg: "gray.200"
            }}
            _focus={{
              outline: "none"
            }}
          />
        </Scrollbars>
      </Flex>
    </Box>
  )
}