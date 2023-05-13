import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className='select-none shadow-lg p-5'>
        <div className='flex items-center justify-between max-w-[60rem] mx-auto'>
            <motion.div
            initial={{x: -500, opacity: 0, scale: 0.5}}
            animate={{x: 0, opacity: 1, scale: 1}}
            transition={{duration: 0.5}}>
                <h1 className='text-xl lg:text-3xl font-bold'>MetricSIM</h1>
                <h2 className='text-lg lg:text-xl font-light'>Data display</h2>
            </motion.div>

            <motion.button 
            initial={{y: -50, opacity: 0, scale: 0.5}}
            animate={{y: 0, opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            className='text-lg lg:text-xl font-light border-2 border-gray-500 rounded-md px-4 py-2 hover:bg-gray-500 hover:text-white'>
                DOCS
            </motion.button>

            <motion.a 
            initial={{x: 500, opacity: 0, scale: 0.5}}
            animate={{x: 0, opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            href='https://github.com/PabloSanchi/OWFWeb/tree/feature/tremor' rel='noreferrer' target='_blank'
            className='hidden md:flex space-x-4  items-center'>
                <GitHubIcon />
            </motion.a>

        </div>
    </header>
  )
}

export default Header