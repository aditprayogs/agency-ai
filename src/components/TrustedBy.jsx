import React from 'react'
import assets, { company_logos } from '../assets/assets'
import { easeOut, motion } from 'motion/react';

const TrustedBy = () => {
  return (
    <motion.div
        initial={{opacity: 0, y:30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        viewport={{once: true}}
        className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40
        gap-10 text-gray-700 dark:text-white/80 bg-white dark:bg-[#0b0f19]'>

        <motion.div
        initial={{opacity: 0, y:20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay:0.8}}
        viewport={{once: true}}
          className='font-semibold'>Trusted by Leading Companies</motion.div>
        
        <motion.div
          initial={{opacity: 0, y:30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}} 
          className='flex items-center justify-center flex-wrap gap-10 m-4'>
            {company_logos.map((logo, index)=>(

                <img key={index} src={logo} alt='' className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
            ))}
        </motion.div>      
    </motion.div>
  )
}

export default TrustedBy
