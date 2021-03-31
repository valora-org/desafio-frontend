import React, { useState } from 'react'
import {
  Box,
  Heading,
  Flex,
  Button,
  IconButton,
  Table,
  Td,
  Text
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromHistory, setChartStocks } from '../store/modules/wallet/actions'
import { motion, AnimatePresence } from 'framer-motion'
import useChart from '../hooks/use-chart'

export default function RecentSearchs() {
  const { appendChartData } = useChart()

  const searchs = useSelector(state => state.wallet.searchs)
  const chartStocks = useSelector(state => state.wallet.chartStocks)

  const dispatch = useDispatch()

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

  const [show, setShow] = useState(true)

  const boxAnimation = {
    in: {
      opacity: 1,
      y: 0,
      transition: { type: 'linear' },
    },
    out: {
      opacity: 0,
      y: -20,
      transition: { type: 'linear' },
    }
  }

  const arrowAnimation = {
    up: {
      rotate: 0
    },
    down: {
      rotate: 180
    }
  }

  function removeStock(symbol) {
    dispatch(removeFromHistory(symbol))
    dispatch(setChartStocks(chartStocks.filter(stock => stock.symbol != symbol)))
  }

  function addStock(symbol) {
    appendChartData(symbol)
  }

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Heading textTransform="uppercase" size="md" color="gray.600">Buscas recentes</Heading>
        <IconButton
          icon={<motion.div variants={arrowAnimation} animate={show ? "up" : "down"}><FiChevronDown size="20" color="#4A5568" /></motion.div>}
          borderRadius="0"
          _hover={{
            bg: "gray.300"
          }}
          onClick={() => setShow(!show)}
          _focus={{
            outline: 0
          }}
        />
      </Flex>

      <AnimatePresence>
        {
          show &&
          <motion.div variants={boxAnimation} initial="in" animate="in" exit="out">
            <Box border="1px" borderColor="gray.200" overflow={['auto', 'auto', 'hidden']}>
              {
                searchs.length ?
                  <AnimatePresence>
                    <Table variant="simple">
                      <motion.tbody>
                        {
                          searchs.map((search, index) => (
                            <motion.tr
                              initial="out"
                              animate="in"
                              exit="out"
                              variants={animation}
                              custom={index}
                              key={search.symbol}
                              layout
                            >
                              <Td whiteSpace="nowrap">
                                <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600" textTransform="uppercase">
                                  {search.symbol}
                                </Text>
                              </Td>
                              <Td>
                                <TdTitle>${search.open.toFixed(2)}</TdTitle>
                                <TdText>Abertura</TdText>
                              </Td>
                              <Td>
                                <TdTitle>${search.close.toFixed(2)}</TdTitle>
                                <TdText>Fechamento</TdText>
                              </Td>
                              <Td textAlign="right" whiteSpace="nowrap">
                                <Button borderRadius="0" mr="2" w="100px" onClick={() => addStock(search.symbol)}>Adicionar</Button>
                                <Button colorScheme="red" borderRadius="0" w="100px" onClick={() => removeStock(search.symbol)}>Remover</Button>
                              </Td>
                            </motion.tr>
                          ))
                        }
                      </motion.tbody>
                    </Table>
                  </AnimatePresence>
                  :
                  <Box bg="gray.100" p="25px" textAlign="center" w="100%">
                    <Text>Nenhuma busca registrada.</Text>
                  </Box>
              }
            </Box>
          </motion.div>
        }
      </AnimatePresence>
    </Box >
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