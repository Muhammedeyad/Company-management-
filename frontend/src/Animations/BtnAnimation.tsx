import React from 'react'
import { motion } from "motion/react"
import type { ReactChild } from '../types/CompanyAdmin/PropTypes'

export const BtnAnimation: React.FC<ReactChild> = ({ children }) => {
    return (

        <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            {children}
        </motion.button>

    )
}
