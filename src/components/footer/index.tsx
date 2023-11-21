import Image from "next/image";

export function Footer() {
   return (
      <div className="flex justify-center items-center gap-2 bg-gray-950 pb-8 pt-16 font-mono text-gray-400">
         <Image
            className='w-12 h-12 bg-color1bg rounded-md p-1'
            width={30}
            height={30}
            src='/images/M.svg'
            alt='Logo Marcelo'
         />
         Desenvolvido por Marcelones
      </div>
   )
}