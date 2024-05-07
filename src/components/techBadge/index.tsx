'use client'

import { motion } from "framer-motion"

type BadgeProps = {
   array: string[]
}

export function TechBadge({ array }: BadgeProps) {
   return (
      <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[380px]'>
         {array.map((item, i) => (
            <motion.span
               className='text-color1text bg-color1bg text-sm py-1 px-3 rounded-lg'
               key={item}
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               {item}
            </motion.span>
         ))}
      </div>
   )
}