import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Flex,
  Button,
  IconButton,
  Table,
  Tbody,
  Tr,
  Td,
  Text
} from '@chakra-ui/react'
import { IoAdd } from 'react-icons/io5'

export default function MyWallet() {

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading textTransform="uppercase" size="md" color="gray.600">Minha carteira</Heading>
        <IconButton
          icon={<IoAdd size="20" color="#4A5568" />}
          borderRadius="0"
          _hover={{
            bg: "gray.300"
          }}
        />
      </Flex>
      <Box border="1px" borderColor="gray.200" overflowX="auto">
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>
                <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600">
                  AAPL
                </Text>
              </Td>
              <Td textAlign="center">
                <TdTitle>Ações</TdTitle>
                <TdText>12</TdText>
                <Text color="gray.400"></Text>
              </Td>
              <Td textAlign="center">
                <TdTitle>Preço</TdTitle>
                <TdText>R$12.00</TdText>
              </Td>
              <Td textAlign="center">
                <TdTitle>Data</TdTitle>
                <TdText>01/09/2020</TdText>
              </Td>
              <Td textAlign="right" whiteSpace="nowrap">
                <Button borderRadius="0" mr="2" w="100px">Compra</Button>
                <Button colorScheme="blue" borderRadius="0" w="100px">Venda</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

function TdTitle(props) {
  return (
    <Text fontSize={['13px', '13px', '17px']} fontWeight="bold" color="gray.600" textTransform="uppercase">{props.children}</Text>
  )
}

function TdText(props) {
  return (
    <Text color="gray.400">{props.children}</Text>
  )
}