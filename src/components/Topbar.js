import React from 'react'
import { Box, Image, Flex, Stack, Heading, Text, Avatar } from '@chakra-ui/react'

export default function Layout() {
  return (
    <Flex
      w="100%"
      h={['80px', '80px', '100px']}
      borderBottom="1px"
      borderBottomColor="gray.200"
      alignItems="center"
      justifyContent="space-between"
      px={['10px', '25px', '25px']}
      position="sticky"
      top="0"
      bg="white"
      zIndex="20"
    >
      <Image src="https://valora.cc/img/logo.png" h={['30px', '50px', '50px']} />

      <Stack direction="row" alignItems="center">
        <Box>
          <Heading size={['sm', 'md', 'md']} textTransform="uppercase" color="gray.600">John Doe</Heading>
          <Text fontSize={['12px', '14px', '16px']}>Desenvolvedor</Text>
        </Box>
        <Avatar size="md" />
      </Stack>
    </Flex>
  )
}