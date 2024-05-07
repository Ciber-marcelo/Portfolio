'use client'

import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from "framer-motion";

export function IntroductionSection() {
   const animationProps = {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
   }

   return (
      <div className='bg-gradient-to-r from-gray-950 via-gray-900 to-color3bg'>
         <div className='container flex justify-center pt-16 pb-32'>
            <div className='w-full sm:max-w-[540px]'>
               <motion.p
                  className='font-mono text-color1text flex justify-center'
                  {...animationProps}
                  transition={{ duration: 0.5 }}
               >
                  Projetos
               </motion.p>

               <motion.div
                  {...animationProps}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <h2 className='text-4xl font-medium mt-2 flex justify-center'>
                     Meus Projetos
                  </h2>

                  <p className='text-gray-400 my-6 text-center'>
                     Aqui você poderá ver alguns dos trabalhos que eu desenvolvi.
                     Navegue à vontade e explore os projetos para ver como foram criados,
                     as tecnologias utilizadas e as funcionalidades implementadas.
                  </p>
               </motion.div>

               <motion.div
                  className='flex justify-center py-6'
                  {...animationProps}
                  transition={{ duration: 0.5, delay: 0.3 }}
               >
                  <a href="/" className='flex gap-2 items-center hover:text-color1text transition'>
                     <HiArrowNarrowLeft size='18' />
                     Voltar para Home
                  </a>
               </motion.div>
            </div>
         </div>
      </div>
   )
}