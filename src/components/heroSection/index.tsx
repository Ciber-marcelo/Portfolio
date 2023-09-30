import Image from 'next/image';
import { technologies } from './technologies';
import { Button } from '../button';

export { technologies } from './technologies';

export function HeroSection() {
   return (
      <div className='container flex items-start justify-between lg:flex-row flex-col-reverse '>
         <div className='w-full lg:max-w-[530px]'>
            <p className='font-mono color1text'>Olá, meu nome é</p>
            <h2 className='text-4xl font-medium mt-2'>Marcelo Meira</h2>

            <p className='text-gray-400 my-6'>
               Olá, meu nome é <b className='text-gray-50'>Marcelo Meira</b> e sou um desenvolveodr front-end
               apaixonado por tecnologia. Com mais de <b className='text-gray-50'>1 ano de experiência</b>.
               Meu objetivo é criar interfaces de usuário bonitas e funcionais, além de liderar equipes técnicas
               em projetos desafiadores. Estou sepre aberto a novas oportunidades e desafios.
            </p>

            <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
               {technologies.map((item) => (
                  <span key={item.name} className='color1text color1bg text-sm py-1 px-3 rounded-lg'>
                     {item.name}
                  </span>
               ))}
            </div>

            <div>
               <Button name='Entre em contato'></Button>
            </div>
         </div>

         <Image
            className='min-w-[420px] rounded-lg'
            width={420}
            height={420}
            src='/killua.jpg'
            alt='Foto de perfil do Marcelo'
         />
      </div>
   )
}