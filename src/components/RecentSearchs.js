import React from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { removeFromHistory } from '../store/modules/wallet/actions'

export default function PriceChart() {
  const searchs = useSelector(state => state.wallet.searchs)
  const dispatch = useDispatch()
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
            {
              searchs.reverse().map(search => (
                <Tr>
                  <Td whiteSpace="nowrap">
                    <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600">
                      {search.symbol}
                    </Text>
                  </Td>
                  <Td>
                    <TdTitle>R$227.27</TdTitle>
                    <TdText>Abertura</TdText>
                  </Td>
                  <Td>
                    <TdTitle>R$227.27</TdTitle>
                    <TdText>Fechamento</TdText>
                  </Td>
                  <Td textAlign="right" whiteSpace="nowrap">
                    <Button borderRadius="0" mr="2" w="100px">Adicionar</Button>
                    <Button colorScheme="red" borderRadius="0" w="100px" onClick={() => dispatch(removeFromHistory(search.symbol))}>Remover</Button>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

function TdTitle(props) {
  return (
    <Text fontSize={['13px', '13px', '17px']} fontWeight="bold" color="gray.600">{props.children}</Text>
  )
}

function TdText(props) {
  return (
    <Text color="gray.400">{props.children}</Text>
  )
}