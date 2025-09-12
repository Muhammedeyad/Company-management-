import React from 'react'
import type { ReactChild } from '../types/CompanyAdmin/PropTypes'

import { motion } from "motion/react"
export const EnterAnimation: React.FC<ReactChild> = ({ children }) => {
    return (
        <motion.button className='w-full'  initial={{ scale: 0 }} animate={{ scale: 1 }} >
            {children}
        </motion.button>
    )
}
