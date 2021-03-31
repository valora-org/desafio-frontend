import React, { useState, useEffect } from 'react'
import {
  Button,
  Td,
  Text,
  Input,
  useToast,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { buyStock, sellStock } from '../store/modules/wallet/actions'
import { motion, AnimatePresence } from 'framer-motion'

export default function MyWalletTr({ stock }) {
  const dispatch = useDispatch()
  const wallet = useSelector(state => state.wallet)
  const toast = useToast()

  const [action, setAction] = useState('NORMAL')

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

  const [qtd, setQtd] = useState()
  const [value, setValue] = useState()
  const [date, setDate] = useState()

  function validate() {
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

  useEffect(() => {
    console.log(wallet)
  }, [wallet])

  function buy() {
    if (validate()) {
      dispatch(buyStock(stock.symbol, qtd, value, date))
      toast({
        title: "Sucesso",
        description: "Compra registrada",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setAction('NORMAL')
    }
  }

  function sell() {
    if (validate()) {
      if (qtd > total())
        return toast({
          title: "Oops",
          description: "Você não tem ações suficientes",
          status: "info",
          duration: 9000,
          isClosable: true,
        })
      dispatch(sellStock(stock.symbol, qtd, value, date))
      toast({
        title: "Sucesso",
        description: "Venda registrada",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setAction('NORMAL')
    }
  }

  function total() {
    let total = 0;
    stock.buys.map(buy => {
      total += parseInt(buy.qtd)
    })
    stock.sales.map(sale => {
      total -= parseInt(sale.qtd)
    })
    return total
  }

  function averagePrice() {
    let total = 0;
    stock.buys.map(buy => {
      total += (parseFloat(buy.value) / stock.buys.length)
    })
    return total.toFixed(2)
  }

  return (
    total() ?
      <AnimatePresence exitBeforeEnter>
        {
          action == 'NORMAL' ?
            <motion.tr
              initial="out"
              animate="in"
              exit="out"
              variants={animation}
              custom={1}
              key={`list${stock.symbol}`}
            >
              <Td>
                <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600">
                  {stock.symbol}
                </Text>
              </Td>
              <Td textAlign="center">
                <TdTitle>Ações</TdTitle>
                <TdText>{total()}</TdText>
                <Text color="gray.400"></Text>
              </Td>
              <Td textAlign="center">
                <TdTitle>Preço</TdTitle>
                <TdText>${averagePrice()}</TdText>
              </Td>
              <Td textAlign="center">
                <TdTitle>Data</TdTitle>
                <TdText>01/09/2020</TdText>
              </Td>
              <Td textAlign="right" whiteSpace="nowrap">
                <Button borderRadius="0" mr="2" w="100px" onClick={() => setAction('BUY')}>Compra</Button>
                <Button colorScheme="blue" borderRadius="0" w="100px" onClick={() => setAction('SELL')}>Venda</Button>
              </Td>
            </motion.tr>
            :
            <motion.tr
              initial="out"
              animate="in"
              exit="out"
              variants={animation}
              custom={1}
              key={`action${stock.symbol}`}
            >
              <Td>
                <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600">
                  AAPL
              </Text>
              </Td>
              <Td textAlign="center">
                <TdTitle>Quantidade</TdTitle>
                <Input minWidth="150px" type="number" mt="1" bg="gray.100" borderRadius="0" onChange={e => setQtd(e.target.value)} />
              </Td>
              <Td textAlign="center">
                <TdTitle>Preço</TdTitle>
                <Input minWidth="150px" type="number" mt="1" bg="gray.100" borderRadius="0" onChange={e => setValue(e.target.value)} />
              </Td>
              <Td textAlign="center">
                <TdTitle>Data</TdTitle>
                <Input minWidth="150px" mt="1" type="date" bg="gray.100" borderRadius="0" onChange={e => setDate(e.target.value)} />
              </Td>
              <Td textAlign="right" whiteSpace="nowrap">
                <Button borderRadius="0" mr="2" onClick={() => setAction('NORMAL')}>Cancelar</Button>
                {
                  action == 'BUY' ?
                    <Button colorScheme="blue" borderRadius="0" onClick={buy}>Confirmar compra</Button>
                    :
                    <Button colorScheme="blue" borderRadius="0" onClick={sell}>Confirmar venda</Button>
                }
              </Td>
            </motion.tr>
        }
      </AnimatePresence>
      :
      <></>
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