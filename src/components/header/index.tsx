//"use client serve para fazer alguns recursoso no next funcionar, exemplo: usePathName"
'use client'

import Image from 'next/image';
import Link from 'next/link';
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

   return(
      <div className='container flex items-center justify-between h-24'>
         <Link href="/">
            <Image 
               className='bg-color1bg rounded-lg'
               width={58}
               height={58}
               src='/M.svg'
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
      </div>
   )
}