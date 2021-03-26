import React from 'react'
import { IconButton } from '@chakra-ui/react'

export default function NavbarItem({ icon }) {

  return (
    <IconButton
      icon={icon}
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
  )
}