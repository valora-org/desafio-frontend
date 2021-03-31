import { useContext } from 'react'

import { ChartContext } from '../providers/ChartProvider'

export default function useChart() {
  const context = useContext(ChartContext)

  return context
}
