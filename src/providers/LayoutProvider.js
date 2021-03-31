import React, { useState, useLayoutEffect, createContext } from 'react'

export const LayoutContext = createContext()

export default function LayoutProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    function updateMobile() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', updateMobile);
    updateMobile();
    return () => window.removeEventListener('resize', updateMobile);
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        isMobile
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
