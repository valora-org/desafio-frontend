import { useContext } from 'react'

import { LayoutContext } from '../providers/LayoutProvider'

export default function useLayout() {
  const context = useContext(LayoutContext)

  return context
}
