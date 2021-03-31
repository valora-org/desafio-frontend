import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import LayoutProvider from './LayoutProvider'
import ChartProvider from './ChartProvider'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

function Providers({ children }) {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <LayoutProvider>
            <ChartProvider>
              {children}
            </ChartProvider>
          </LayoutProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
