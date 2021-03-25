import React from 'react'
import { Box, IconButton, Flex } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { ImHome3 } from 'react-icons/im'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { RiFileChartFill, RiFolderUploadFill } from 'react-icons/ri'
import { FaFileImage } from 'react-icons/fa'
import { FaRegCalendar, FaUserFriends } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Navbar() {
  return (
    <Box bgColor="gray.100" h="100%" pos="relative">
      <Flex pos="fixed" top="0" flexDir="column">
        <IconButton
          icon={<FiMenu size="40px" color="white" />}
          borderRadius="0"
          w="80px"
          h="100px"
          bg="gray.600"
          _hover={{
            bg: "gray.800"
          }}
          _focus={{
            outline: "none"
          }}
        />
        <Scrollbars
          style={{ width: 80, height: 'calc(100vh - 100px)' }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={500}
        >
          <IconButton
            icon={<BiSearchAlt2 size="30px" color="#4A5568" />}
            borderRadius="0"
            w="100%"
            h="80px"
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