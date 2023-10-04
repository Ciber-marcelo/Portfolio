import Image from 'next/image';
import { technologies } from './technologies';
import { Button } from '../button';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { contacts } from './contacts';
import { url } from 'inspector';
export { technologies } from './technologies';
export { contacts } from './contacts';

export function HeroSection() {
   return (
      <div className='bg-gradient-to-r from-gray-950 via-gray-900 to-color3bg'>
         <div className='container flex items-start justify-between lg:flex-row flex-col-reverse py-16 gap-y-6'>
            <div className='w-full lg:max-w-[530px]'>
               <p className='font-mono text-color1text'>Olá, meu nome é</p>
               <h2 className='text-4xl font-medium mt-2'>Marcelo Meira</h2>

               <p className='text-gray-400 my-6'>
                  Olá, meu nome é <b className='text-gray-50'>Marcelo Meira</b> e sou um desenvolvedor full-stack
                  JavaScript. Com mais de <b className='text-gray-50'>2 anos de experiência</b>.
                  Meu objetivo é criar interfaces web/mobile bonitas e funcionais, além de participar de equipes técnicas
                  em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.
               </p>

               <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                  {technologies.map((item) => (
                     <span key={item.id} className='text-color1text bg-color1bg text-sm py-1 px-3 rounded-lg'>
                        {item.name}
                     </span>
                  ))}
               </div>

               <div className='mt-10 flex gap-5 flex-col lg:flex-row'>
                  <Button onClick=''>
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
            </div>

            <Image
               className='w-[300px] lg:w-[420px] rounded-lg object-cover'
               width={420}
               height={420}
               src='/killua.jpg'
               alt='Foto de perfil do Marcelo'
            />
         </div>
      </div>
   )
}