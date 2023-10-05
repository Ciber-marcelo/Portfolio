import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { HiArrowNarrowRight } from 'react-icons/hi'

export function ContactForm() {
   return (
      <div className="flex py-16 px-6 justify-center items-center bg-gray-950">
         <div className="flex flex-col gap-4 max-w-[420px]">
            <SectionTitle
               title="Vamos trabalhar juntos ? Entre em contato"
               subTitle="contato"
            />

            <input
               className="
                  w-full 
                  h-14 
                  p-4 
                  rounded-lg 
                  bg-gray-800 
                  text-gray-50 
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:ring-2
                  ring-color1bg
                  mt-6
               "
               placeholder="Nome"
            />

            <input
               className="
                  w-full 
                  h-14 
                  p-4 
                  rounded-lg 
                  bg-gray-800 
                  text-gray-50 
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:ring-2
                  ring-color1bg
               "
               placeholder="E-mail"
            />

            <textarea 
               className="
                  w-full
                  h-[138px]
                  p-4
                  rounded-lg
                  bg-gray-800
                  text-gray-50 
                  placeholder:text-gray-400
                  focus:outline-none
                  focus:ring-2
                  ring-color1bg
                   resize-none
               "
               placeholder="Mensagem"
            />

            <div className="flex justify-center w-full mt-6">
               <Button onClick=''>
                  Enviar mensagem
                  <HiArrowNarrowRight size={18}/>
               </Button>
            </div>
         </div>
      </div>
   )
}