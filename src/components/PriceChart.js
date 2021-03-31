import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box, Heading, Flex, Button, Stack, IconButton, Input, useToast, Tooltip, ProgressLabel } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoAdd } from 'react-icons/io5'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import api from '../services/api'
import { month, week } from '../services/dates'
import { useDispatch, useSelector } from 'react-redux'
import { searchStock, setChartStocks, } from '../store/modules/wallet/actions'

import useChart from '../hooks/use-chart'

export default function PriceChart() {

  const {
    searchTerm,
    setSearchTerm,
    setPeriod,
    options,
    updatingDay,
    updatingWeek,
    updatingMonth,
    setChartData,
    appendChartData,
    loadingSet,
    loadingAppend,
  } = useChart()

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
              <Tooltip label="Pesquisar">
                <IconButton
                  icon={<BiSearchAlt2 size="20px" color="#4A5568" />}
                  borderRadius="0"
                  bg="transparent"
                  position="absolute"
                  right="0"
                  top="0"
                  bottom="0"
                  onClick={() => setChartData()}
                  isLoading={loadingSet}
                />
              </Tooltip>
            </Stack>
            <Tooltip label="Adicionar">
              <IconButton
                icon={<IoAdd size="20px" color="#4A5568" />}
                borderRadius="0"
                bg="gray.200"
                _hover={{
                  bg: "gray.300"
                }}
                onClick={() => appendChartData()}
                isLoading={loadingAppend}
              />
            </Tooltip>
          </Stack>

          <Stack direction="row">
            <PeriodButton buttonPeriod='day' setPeriod={setPeriod} text='D' label='Dia' isLoading={updatingDay} />
            <PeriodButton buttonPeriod='week' setPeriod={setPeriod} text='S' label='Semana' isLoading={updatingWeek} />
            <PeriodButton buttonPeriod='month' setPeriod={setPeriod} text='M' label='Mês' isLoading={updatingMonth} />
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

function PeriodButton({ period, setPeriod, buttonPeriod, text, label, isLoading }) {
  return (
    <Tooltip label={label}>
      <Button isLoading={isLoading} borderRadius="0" bg={period == buttonPeriod ? 'gray.400' : 'gray.200'} _hover={{ bg: "gray.300" }} onClick={() => setPeriod(buttonPeriod)}>{text}</Button>
    </Tooltip>
  )
}