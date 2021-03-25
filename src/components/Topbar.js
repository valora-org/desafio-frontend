import React from 'react'
import { Box, Image, Flex, Stack, Heading, Text, Avatar } from '@chakra-ui/react'

export default function Layout() {
  return (
    <Flex h="100px" borderBottom="1px" borderBottomColor="gray.200" alignItems="center" justifyContent="space-between" px="25px">
      <Image src="https://valora.cc/img/logo.png" h="50px" />

      <Stack direction="row" alignItems="center">
        <Box>
          <Heading size="md" textTransform="uppercase" color="gray.600">John Doe</Heading>
          <Text size="sm">Desenvolvedor</Text>
        </Box>
        <Avatar size="md" />
      </Stack>
    </Flex>
  )
}