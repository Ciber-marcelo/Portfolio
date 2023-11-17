'use client'

import { motion } from "framer-motion"
import { TechBadge } from "../techBadge"

type ExperienceProps = {
   companyName: string
   initial: string
   officeName: string
   time: string
   text: string
   technologies: string[]
}

export function ExperienceItem({ companyName, initial, officeName, time, text, technologies }: ExperienceProps) {
   return (
      <motion.div 
         className="grid grid-cols-[40px,1fr] gap-4"
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 100 }}
         transition={{ duration: 0.5 }}
      >
         <div className=" w-12 flex flex-col items-center gap-4">
            <span className="flex p-2 justify-center items-center h-[40px] w-[40px] rounded-full border-[2px] bg-color3bg text-gray-500 border-gray-500 font-medium">
               {initial}
            </span>

            <div className='h-full w-[2px] bg-gray-800' />
         </div>

         <div className="flex flex-col gap-2 pb-8">
            <p className="text-gray-500">{companyName}</p>
            <h4 className="text-gray-300">{officeName}</h4>
            <p className="text-gray-500">{time}</p>
            <p className="text-gray-400">{text}</p>
            <p className="text-gray-400 text-sm mt-6 font-semibold">Competências</p>
            <TechBadge array={technologies} />
         </div>
      </motion.div>
   )
}