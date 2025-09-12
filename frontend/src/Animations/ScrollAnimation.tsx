import React from 'react'
import { motion } from "motion/react"
import type { ReactChild } from '../types/CompanyAdmin/PropTypes'

export const ScrollAnimation:React.FC<ReactChild> = ({children}) => {
  return (
   <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
>
    {children}
</motion.div>
  )
}
