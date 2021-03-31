import React, { useState, useEffect, createContext } from 'react'
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

export const ChartContext = createContext()

export default function ChartProvider({ children }) {
  const wallet = useSelector(state => state.wallet)
  const chartStocks = useSelector(state => state.wallet.chartStocks)
  const dispatch = useDispatch()
  const toast = useToast()
  const [searchTerm, setSearchTerm] = useState()
  const [period, setPeriod] = useState('month')
  //const [chartStocks, setStocks] = useState([])
  const [options, setOptions] = useState({

    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    tooltip: {
      valueDecimals: 2,
      valuePrefix: '$',
      valueSuffix: ' USD'
    },
    series: []
  })

  function getDates() {
    if (period == 'week')
      return { from: week().firstDay, to: week().lastDay }
    return { from: month().firstDay, to: month().lastDay }
  }

  async function getStockData(ticker) {
    if (period == 'day') {
      let result = await api.get(`/historical-chart/1hour/${ticker}`, {
        // params: {
        //   serietype: 'line'
        // }
      });

      result.data.historical = result.data.filter(item => (new Date() - new Date(item.date.replace(/-/g, '\/'))) <= 172800000)
      result.data.symbol = ticker

      return result
    }

    let dates = getDates()
    return api.get(`/historical-price-full/${ticker}`, {
      params: {
        from: dates.from,
        to: dates.to,
        //serietype: 'line'
      }
    });
  }

  const [loadingSet, setLoadingSet] = useState(false)
  async function setChartData(ticker = null) {
    if (!ticker && !searchTerm)
      return toast({
        title: "Oops",
        description: "Você precisa informar um ticker",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
    setLoadingSet(true)
    let result = await getStockData(ticker ? ticker : searchTerm)
    if (!result.data.historical) {
      toast({
        title: "Oops",
        description: "Não foi possível encontrar o ticker informado",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    else {
      dispatch(setChartStocks([result.data]))
      //setStocks([result.data])
      setSearchTerm('')
      const open = result.data.historical[result.data.historical.length - 1].open
      const close = result.data.historical[result.data.historical.length - 1].close
      dispatch(searchStock(result.data.symbol, open, close))
    }
    setLoadingSet(false)
  }

  const [loadingAppend, setLoadingAppend] = useState(false)
  async function appendChartData(term = null) {
    if (!searchTerm && !term)
      return toast({
        title: "Oops",
        description: "Você precisa informar um ticker",
        status: "info",
        duration: 9000,
        isClosable: true,
      })
    if (!term)
      setLoadingAppend(true)
    let result = await getStockData(term ? term : searchTerm)
    if (!result.data.historical) {
      toast({
        title: "Oops",
        description: "Não foi possível encontrar o ticker informado",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    else {
      dispatch(setChartStocks([...chartStocks.filter(stock => stock.symbol.toUpperCase() != result.data.symbol.toUpperCase()), result.data]))
      //setStocks([...chartStocks, result.data])
      if (!term) {
        setSearchTerm('')
        const open = result.data.historical[result.data.historical.length - 1].open
        const close = result.data.historical[result.data.historical.length - 1].close
        dispatch(searchStock(result.data.symbol, open, close))
      }
    }
    if (!term)
      setLoadingAppend(false)
  }

  useEffect(() => {
    if (chartStocks.length) {
      let dates = []
      let series = []
      if (!chartStocks[0].historical) {
        toast({
          title: "Oops",
          description: "Não foi possível encontrar os dados para o período requisitado",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } else {
        chartStocks[0].historical.reverse().map(day => {
          dates.push(day.date)
        })

        chartStocks.map(stock => {
          let values = []
          stock.historical.reverse().map(day => {
            values.push(day.close)
          })
          series.push({ data: values, name: stock.symbol })
        })
      }

      setOptions({
        ...options,
        xAxis: {
          categories: dates,
        },
        series,
      })
    }
  }, [chartStocks])

  const [updatingDay, setUpdatingDay] = useState(false)
  const [updatingWeek, setUpdatingWeek] = useState(false)
  const [updatingMonth, setUpdatingMonth] = useState(false)

  async function updatePeriod() {
    updatePeriodFeedback(true)
    let newStocks = chartStocks
    for (let i = 0; i < newStocks.length; i++) {
      let result = await getStockData(newStocks[i].symbol)
      if (result.data.historical)
        newStocks[i] = result.data
      else
        toast({
          title: "Oops",
          description: "Não foi possível encontrar os dados para o período requisitado",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
    }
    //setStocks([...newStocks])
    dispatch(setChartStocks([...newStocks]))
    updatePeriodFeedback(false)
  }

  function updatePeriodFeedback(status) {
    switch (period) {
      case 'day':
        setUpdatingDay(status)
        break
      case 'week':
        setUpdatingWeek(status)
        break
      case 'month':
        setUpdatingMonth(status)
    }
  }

  useEffect(() => {
    updatePeriod()
  }, [period])

  return (
    <ChartContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        period,
        setPeriod,
        options,
        setOptions,
        updatingDay,
        setUpdatingDay,
        updatingWeek,
        setUpdatingWeek,
        updatingMonth,
        setUpdatingMonth,
        setChartData,
        appendChartData,
        loadingSet,
        setLoadingSet,
        loadingAppend,
        setLoadingAppend
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}
