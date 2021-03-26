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
import { FiChevronDown } from 'react-icons/fi'

export default function PriceChart() {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading textTransform="uppercase" size="md" color="gray.600">Buscas recentes</Heading>
        <IconButton
          icon={<FiChevronDown size="20" color="#4A5568" />}
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
              <Td whiteSpace="nowrap">
                <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600">
                  Apple Inc. (AAPL)
                </Text>
              </Td>
              <Td>
                <Text fontSize={['13px', '13px', '17px']} fontWeight="bold" color="gray.600">R$227.27</Text>
                <Text color="gray.400">Abertura</Text>
              </Td>
              <Td>
                <Text fontSize={['13px', '13px', '17px']} fontWeight="bold" color="gray.600">R$227.27</Text>
                <Text color="gray.400">Fechamento</Text>
              </Td>
              <Td textAlign="right" whiteSpace="nowrap">
                <Button borderRadius="0" mr="2" w="100px">Adicionar</Button>
                <Button colorScheme="red" borderRadius="0" w="100px">Remover</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}