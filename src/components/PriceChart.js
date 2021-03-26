import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box, Heading, Flex, Button, Stack, IconButton, Input } from '@chakra-ui/react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { IoAdd } from 'react-icons/io5'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: ''
  },
  series: [{
    data: [1, 2, 3]
  }]
}

export default function PriceChart() {
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
              />
              <IconButton
                icon={<BiSearchAlt2 size="20px" color="#4A5568" />}
                borderRadius="0"
                bg="transparent"
                position="absolute"
                right="0"
                top="0"
                bottom="0"
              />
            </Stack>
            <IconButton
              icon={<IoAdd size="20px" color="#4A5568" />}
              borderRadius="0"
              bg="gray.200"
              _hover={{
                bg: "gray.300"
              }}
            />
          </Stack>

          <Stack direction="row">
            <Button borderRadius="0" bg="gray.200" _hover={{ bg: "gray.300" }}>D</Button>
            <Button borderRadius="0" bg="gray.200" _hover={{ bg: "gray.300" }}>S</Button>
            <Button borderRadius="0" bg="gray.200" _hover={{ bg: "gray.300" }}>M</Button>
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