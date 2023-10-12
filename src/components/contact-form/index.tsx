//"use client" serve para fazer alguns recursoso funcionarem no next, exemplo: o hook "useForm"
'use client'

import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { HiArrowNarrowRight } from 'react-icons/hi';
//hook usado para "facilitar" o uso de formularios
import { useForm } from 'react-hook-form';

export function ContactForm() {
   const { register, handleSubmit } = useForm();

   function ttt(data: any) {
      console.log(data)
   }

   return (
      <div className="flex py-16 px-6 justify-center items-center bg-gray-950">
         <div className="max-w-[420px]">
            <SectionTitle
               title="Vamos trabalhar juntos ? Entre em contato"
               subTitle="contato"
            />

            <form
               onSubmit={handleSubmit(ttt)}
               className="flex flex-col gap-4 pt-10"
            >
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
                  placeholder="Nome"
                  {...register('name', { required: true })}
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
                  {...register('email', { required: true })}
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
                  maxLength={500}
                  {...register('message', { required: true })}
               />

               <div className="flex flex-col justify-center mt-6">
                  <Button>
                     Enviar mensagem
                     <HiArrowNarrowRight size={18} />
                  </Button>
               </div>
            </form>
         </div>
      </div>
   )
}