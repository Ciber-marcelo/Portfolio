'use client'

import { motion } from "framer-motion"

type TitleProps = {
   title: string
   subTitle: string
}

export function SectionTitle({ title, subTitle }: TitleProps) {
   const animationProps = {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
   }
   
   return (
      <div className='flex flex-col gap-4'>
         <motion.span 
            className="font-mono text-sm text-color1text"
            {...animationProps}
            transition={{ duration: 0.5 }}
         >
            ../{subTitle}
         </motion.span>

         <motion.h3 
            className="text-3xl font-medium"
            {...animationProps}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
               {title}
         </motion.h3>
      </div>
   )
}