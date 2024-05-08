import Image from "next/image";

export function Footer() {
   return (
      <div className="flex justify-center items-center bg-color4bg pb-8 pt-16">
         <Image
            className='w-12 h-12 bg-color1bg rounded-s-md p-2'
            width={30}
            height={30}
            src='/images/M.svg'
            alt='Logo Marcelo'
         />
         <p className="h-12 flex items-center px-4 rounded-e-md border-4 border-l-0 border-color1bg font-mono text-color3text">
            Desenvolvido por Marcelones
         </p>
      </div>
   )
}