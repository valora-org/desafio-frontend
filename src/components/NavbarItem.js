import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function NavbarItem({ icon, index }) {
  const animation = {
    in: {
      opacity: 1,
      y: 0,
      transition: { type: 'linear', delay: index * 0.05 },
    },
    out: {
      opacity: 0,
      y: 20,
      transition: { type: 'linear', delay: index * 0.05 },
    },
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animation}
    >
      <IconButton
        icon={icon}
        borderRadius="0"
        w="100%"
        h="80px"
        bg="transparent"
        _hover={{
          bg: "gray.200"
        }}
        _focus={{
          outline: "none"
        }}
      />
    </motion.div>
  )
}