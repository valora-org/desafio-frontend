import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Flex,
  Button,
  IconButton,
  Table,
  Td,
  Text,
  Input,
  Tooltip,
  useToast
} from '@chakra-ui/react'
import { IoAdd } from 'react-icons/io5'
import { BiMinus } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { buyStock } from '../store/modules/wallet/actions'
import { motion, AnimatePresence } from 'framer-motion'

import MyWalletTr from './MyWalletTr'

export default function MyWallet() {
  const dispatch = useDispatch()
  const stocks = useSelector(state => state.wallet.stocks)

  const [addVisible, setAddVisible] = useState(false)

  const [ticker, setTicker] = useState()
  const [qtd, setQtd] = useState()
  const [value, setValue] = useState()
  const [date, setDate] = useState()

  const toast = useToast()

  function validate() {
    if (!ticker) {
      toast({
        title: "Oops",
        description: "Você precisa informar um ticker",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
      return false
    }

    if (!qtd) {
      toast({
        title: "Oops",
        description: "Você precisa informar uma quantidade",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
      return false
    }

    if (!value) {
      toast({
        title: "Oops",
        description: "Você precisa informar um preço",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
      return false
    }

    if (!date) {
      toast({
        title: "Oops",
        description: "Você precisa informar uma data",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
      return false
    }

    return true
  }

  function buy() {
    if (validate()) {
      dispatch(buyStock(ticker, qtd, value, date))
      toast({
        title: "Sucesso",
        description: "Compra registrada",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setAddVisible(false)
      setTicker('')
      setQtd('')
      setValue('')
      setDate('')
    }
  }

  function cancel() {
    setAddVisible(false)
    setTicker('')
    setQtd('')
    setValue('')
    setDate('')
  }

  // function sell() {
  //   if (validate()) {
  //     dispatch(sellStock(ticker, qtd, value, date))
  //     toast({
  //       title: "Sucesso",
  //       description: "Venda registrada",
  //       status: "success",
  //       duration: 9000,
  //       isClosable: true,
  //     })
  //     setAddVisible(false)
  //   }
  // }

  const animation = {
    in: index => ({
      opacity: 1,
      y: 0,
      transition: { type: 'linear', delay: index * 0.1 },
    }),
    out: index => ({
      opacity: 0,
      y: 20,
      transition: { type: 'linear', delay: index * 0.05 },
    }),
  }

  const [hasStocks, setHasStocks] = useState(false)

  useEffect(() => {
    let total = 0
    stocks.map(stock => {
      stock.buys.map(buy => {
        total += parseInt(buy.qtd)
      })
      stock.sales.map(sale => {
        total -= parseInt(sale.qtd)
      })
    })

    if (total)
      setHasStocks(true)
  }, [stocks])

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading textTransform="uppercase" size="md" color="gray.600">Minha carteira</Heading>

        {
          addVisible ?
            <Tooltip label="Cancelar">
              <IconButton
                icon={<BiMinus size="20" color="#4A5568" />}
                borderRadius="0"
                _hover={{
                  bg: "gray.300"
                }}
                onClick={() => setAddVisible(false)}
                _focus={{
                  outline: 'none'
                }}
              />
            </Tooltip>
            :
            <Tooltip label="Nova operação">
              <IconButton
                icon={<IoAdd size="20" color="#4A5568" />}
                borderRadius="0"
                _hover={{
                  bg: "gray.300"
                }}
                onClick={() => setAddVisible(true)}
                _focus={{
                  outline: 'none'
                }}
              />
            </Tooltip>
        }
      </Flex>
      <Box border="1px" borderColor="gray.200" overflow={['auto', 'auto', 'hidden']}>
        {
          (!hasStocks && !addVisible) &&
          <Box bg="gray.100" p="25px" textAlign="center" w="100%">
            <Text>Nenhuma ação registrada.</Text>
          </Box>
        }
        <Table variant="simple">

          <AnimatePresence>
            <motion.tbody layout>
              {
                hasStocks &&
                stocks.map(stock => (
                  <MyWalletTr stock={stock} />
                ))
              }
            </motion.tbody>

            {
              addVisible &&
              <motion.tr
                initial="out"
                animate="in"
                exit="out"
                variants={animation}
              >
                <Td>
                  <Input minWidth="150px" type="text" bg="gray.100" borderRadius="0" placeholder="Ticker" value={ticker} onChange={e => setTicker(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input minWidth="150px" type="text" bg="gray.100" borderRadius="0" placeholder="Quantidade" value={qtd} onChange={e => setQtd(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input minWidth="150px" type="text" bg="gray.100" borderRadius="0" placeholder="Preço" value={value} onChange={e => setValue(e.target.value)} />
                </Td>
                <Td textAlign="center">
                  <Input minWidth="150px" type="date" bg="gray.100" borderRadius="0" placeholder="Data" value={date} onChange={e => setDate(e.target.value)} />
                </Td>
                <Td textAlign="right" whiteSpace="nowrap">
                  <Button borderRadius="0" mr="2" w="100px" onClick={cancel}>Cancelar</Button>
                  <Button colorScheme="blue" borderRadius="0" onClick={buy}>Confirmar compra</Button>
                  {/* <Button colorScheme="blue" borderRadius="0" w="100px" onClick={sell}>Vender</Button> */}
                </Td>
              </motion.tr>
            }
          </AnimatePresence>
        </Table>
      </Box>
    </Box>
  )
}