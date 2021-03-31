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
          icon={<FiChevronDown size="20" color="#4A5568" />}
          borderRadius="0"
          _hover={{
            bg: "gray.300"
          }}
        />
      </Flex>

      <Box border="1px" borderColor="gray.200" overflowX="auto">
        {
          searchs.length ?
            <AnimatePresence>
              <Table variant="simple">
                <motion.tbody layout>
                  {
                    searchs.reverse().map((search, index) => (
                      <motion.tr
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={animation}
                        custom={index}
                        key={search.symbol}
                      >
                        <Td whiteSpace="nowrap">
                          <Text fontSize={['16px', '16px', '20px']} fontWeight="bold" color="gray.600" textTransform="uppercase">
                            {search.symbol}
                          </Text>
                        </Td>
                        <Td>
                          <TdTitle>R${search.open.toFixed(2).replace('.', ',')}</TdTitle>
                          <TdText>Abertura</TdText>
                        </Td>
                        <Td>
                          <TdTitle>R${search.close.toFixed(2).replace('.', ',')}</TdTitle>
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