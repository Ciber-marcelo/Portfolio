'use client'

import Image from 'next/image';
import { technologies } from '../../../public/jsons/techsHero';
import { contacts } from '../../../public/jsons/contacts';
import { Button } from '../button';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from "framer-motion"
import { TechBadge } from '../techBadge';

export function HeroSection() {

   function scrollToBottom() {
      window.scrollTo({ top: 10000, behavior: "smooth" })
   }

   return (
      <div className='bg-gradient-to-r from-gray-950 via-gray-900 to-color3bg'>
         <div className='container flex items-start justify-between lg:flex-row flex-col-reverse py-32 gap-y-6'>
            <motion.div
               className='w-full lg:max-w-[530px]'
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={{ duration: 0.5 }}
            >
               <p className='font-mono text-color1text'>Olá, meu nome é</p>
               <h2 className='text-4xl font-medium mt-2 text-color2text'>Marcelo Meira</h2>

               <p className='text-color3text my-6'>
                  Olá, meu nome é <b className='text-color2text'>Marcelo Meira</b> e sou um desenvolvedor full-stack
                  JavaScript. Com mais de <b className='text-color2text'>2 anos de experiência</b>.
                  Meu objetivo é criar interfaces web/mobile funcionais, além de participar de equipes técnicas
                  em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.
               </p>

               <TechBadge array={technologies} />

               <div className='mt-10 flex gap-5 flex-col lg:flex-row'>
                  <Button className='shadow-button' onClick={scrollToBottom}>
                     Entre em contato
                     <HiArrowNarrowRight size='18' />
                  </Button>

                  <div className='text-2xl text-gray-600 flex items-center gap-3'>
                     {contacts.map((item) => (
                        <a
                           className='hover:text-gray-100 transition-all'
                           href={item.url}
                           key={item.id}
                           target='blank'
                        >
                           {item.icon}
                        </a>
                     ))}
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 100, scale: 0.5 }}
               whileInView={{ opacity: 1, x: 0, scale: 1 }}
               exit={{ opacity: 0, x: 100, scale: 0.5 }}
               transition={{ duration: 0.5 }}
            >
               <Image
                  className='w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-lg object-cover'
                  width={420}
                  height={420}
                  src='/images/foto.png'
                  alt='Foto de perfil do Marcelo'
               />
            </motion.div>
         </div>
      </div>
   )
}