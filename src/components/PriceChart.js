import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box, Heading, Flex, Button, Stack, IconButton, Input } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoAdd } from 'react-icons/io5'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import api from '../services/api'

const options = {
  title: {
    text: ''
  },
  series: [{
    data: [1, 2, 3]
  }]
}

export default function PriceChart() {
  const [searchTerm, setSearchTerm] = useState()
  const [visualizationType, setVisualizationType] = useState('day')
  const [stocks, setStocks] = useState([])

  function getStockData(value) {
    return api.get(`/api/v3/historical-price-full/${value}`);
  }

  async function setChartData(value) {
    let result = await getStockData(value)
    console.log(result)
    setStocks([result])
  }

  async function appendChartData() {
    let result = await getStockData(searchTerm)
    console.log(result)
    setStocks([...stocks, result])
  }

  return (
    <Box border="1px" borderColor="gray.200">
      <Box borderBottom="1px" borderBottomColor="gray.200">
        <Flex
          p="10px"
          flexDir={['column', 'row', 'row']}
          alignItems={['flex-start', 'flex-start', 'center']}
          justifyContent={['flex-start', 'flex-start', 'space-between']}
        >
          <Heading
            textTransform="uppercase"
            size="md"
            color="gray.600"
            mb={[2, 2, 0]}
          >
            Gráfico de Preços
          </Heading>

          <Stack direction="row" mb={[2, 2, 0]}>
            <Stack direction="row" position="relative">
              <Input
                type="text"
                borderRadius="0"
                borderWidth="1px"
                pr="40px"
                w={['100%', '250px', '300px']}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    setChartData(e.target.value)
                  }
                }}
              />
              <IconButton
                icon={<BiSearchAlt2 size="20px" color="#4A5568" />}
                borderRadius="0"
                bg="transparent"
                position="absolute"
                right="0"
                top="0"
                bottom="0"
                onClick={() => setChartData(searchTerm)}
              />
            </Stack>
            <IconButton
              icon={<IoAdd size="20px" color="#4A5568" />}
              borderRadius="0"
              bg="gray.200"
              _hover={{
                bg: "gray.300"
              }}
              onClick={appendChartData}
            />
          </Stack>

          <Stack direction="row">
            <Button borderRadius="0" bg={visualizationType == 'day' ? 'gray.400' : 'gray.200'} _hover={{ bg: "gray.300" }} onClick={() => setVisualizationType('day')}>D</Button>
            <Button borderRadius="0" bg={visualizationType == 'week' ? 'gray.400' : 'gray.200'} _hover={{ bg: "gray.300" }} onClick={() => setVisualizationType('week')}>S</Button>
            <Button borderRadius="0" bg={visualizationType == 'month' ? 'gray.400' : 'gray.200'} _hover={{ bg: "gray.300" }} onClick={() => setVisualizationType('month')}>M</Button>
          </Stack>
        </Flex>
      </Box>
      <Box>
        <Box pt="5" w="98%">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </Box>
      </Box>
    </Box>
  )
}