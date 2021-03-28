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
  Text,
  Input,
  Tooltip
} from '@chakra-ui/react'
import { IoAdd } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { buyStock, sellStock } from '../store/modules/wallet/actions'

export default function MyWallet() {
  const dispatch = useDispatch()
  const wallet = useSelector(state => state.wallet)
  const [addVisible, setAddVisible] = useState(false)

  const [myStocks, setMyStocks] = useState([])

  const [newTicker, setNewTicker] = useState()
  const [newQtd, setNewQtd] = useState()
  const [newPrice, setNewPrice] = useState()
  const [newDate, setNewDate] = useState()

  useEffect(() => {
  }, [wallet])

  function buy() {

  }

  function sell() {

  }

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading textTransform="uppercase" size="md" color="gray.600">Minha carteira</Heading>

        <Tooltip label="Nova operação">
          <IconButton
            icon={<IoAdd size="20" color="#4A5568" />}
            borderRadius="0"
            _hover={{
              bg: "gray.300"
            }}
            onClick={() => setAddVisible(true)}
          />
        </Tooltip>
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
            {
              addVisible &&
              <Tr>
                <Td>
                  <Input type="text" bg="gray.100" borderRadius="0" placeholder="Ticker" value={newTicker} onChange={e => setNewTicker(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input type="text" bg="gray.100" borderRadius="0" placeholder="Quantidade" value={newQtd} onChange={e => setNewQtd(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input type="text" bg="gray.100" borderRadius="0" placeholder="Preço" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input type="date" bg="gray.100" borderRadius="0" placeholder="Data" value={newDate} onChange={e => setNewDate(e.target.value)} />
                </Td>
                <Td textAlign="right" whiteSpace="nowrap">
                  <Button borderRadius="0" mr="2" w="100px">Compra</Button>
                  <Button colorScheme="blue" borderRadius="0" w="100px">Venda</Button>
                </Td>
              </Tr>
            }
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