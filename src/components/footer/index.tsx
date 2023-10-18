import Image from "next/image";

export function Footer() {
   return (
      <div className="flex justify-center bg-gray-950 pb-6 pt-16">
         <div className="flex items-center gap-3 font-mono text-gray-400">
            <Image
               className='bg-color1bg rounded-lg p-1'
               width={30}
               height={30}
               src='/images/M.svg'
               alt='Logo Marcelo'
            />
            Desenvolvido por Marcelones
         </div>
      </div>
   )
}