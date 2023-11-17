'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
//"usePathname" serve para pegar o nome do href da pagina atual
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
   {
      label: 'Home',
      href: '/',
   },
   {
      label: 'Projetos',
      href: '/projects',
   },
]

export function Header() {
   const pathname = usePathname()

   return (
      <div className='bg-gradient-to-r from-gray-950 via-gray-900 to-color3bg'>
         <motion.div
            className='container flex items-center justify-between h-24'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
         >
            <Link href="/">
               <Image
                  className='bg-color1bg rounded-full p-2'
                  width={58}
                  height={58}
                  src='/images/M.svg'
                  alt='Logo Marcelo'
               />
            </Link>

            <nav className='flex items-center gap-4 sm:gap-10 font-mono'>
               {NAV_ITEMS.map((item) => (
                  <Link
                     href={item.href}
                     key={item.label}
                     className={pathname === item.href ? 'text-gray-50' : 'text-gray-400'}
                  >
                     <span className='text-color1text'># </span>
                     {item.label}
                  </Link>
               ))}
            </nav>
         </motion.div>
      </div>
   )
}