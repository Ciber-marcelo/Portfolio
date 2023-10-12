import { HiArrowNarrowLeft } from 'react-icons/hi'

export function IntroductionSection() {
   return (
      <div className='bg-gradient-to-r from-gray-950 via-gray-900 to-color3bg'>
         <div className='container flex justify-center py-16'>
            <div className='w-full sm:max-w-[540px]'>
               <p className='font-mono text-color1text flex justify-center'>
                  Projetos
               </p>

               <h2 className='text-4xl font-medium mt-2 flex justify-center'>
                  Meus Projetos
               </h2>

               <p className='text-gray-400 my-6 text-center'>
                  Aqui você poderá ver alguns dos trabalhos que eu desenvolvi.
                  Navegue à vontade e explore os projetos para ver como foram criados,
                  as tecnologias utilizadas e as funcionalidades implementadas.
               </p>

               <div className='flex justify-center py-6'>
                  <a href="/" className='flex gap-2 items-center hover:text-color1text transition'>
                     <HiArrowNarrowLeft size='18' />
                     Voltar para Home
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}