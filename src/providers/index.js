import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import LayoutProvider from './LayoutProvider'

function Providers({ children }) {
  return (
    <ChakraProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </ChakraProvider>
  )
}

export default Providers
