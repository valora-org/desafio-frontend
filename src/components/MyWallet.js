import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
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

export default function PriceChart() {
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
      <Box border="1px" borderColor="gray.200">
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>
                <Text fontSize="20px" fontWeight="bold" color="gray.600">
                  AAPL
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="17px" fontWeight="bold" color="gray.600" textTransform="uppercase">Ações</Text>
                <Text color="gray.400">12</Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="17px" fontWeight="bold" color="gray.600" textTransform="uppercase">Preço</Text>
                <Text color="gray.400">R$12.00</Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="17px" fontWeight="bold" color="gray.600" textTransform="uppercase">Data</Text>
                <Text color="gray.400">01/09/2020</Text>
              </Td>
              <Td textAlign="right">
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