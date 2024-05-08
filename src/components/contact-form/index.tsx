'use client'

import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { HiArrowNarrowRight } from 'react-icons/hi';
//hook usado para "facilitar" o uso de formularios
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type ContactFormSchema = {
   name: string
   email: string
   message: string
}

export function ContactForm() {
   const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactFormSchema>();

   async function onSubimit(data: ContactFormSchema) {
      try {
         await axios.post('apiDiscord', data)
         toast.success('Mensagem enviada com sucesso!')
         reset()
      } catch {
         toast.error('Ocorreu um erro ao enviar a mensagem.')
      }
   }

   return (
      <div className="flex pb-16 pt-32 px-6 justify-center items-center bg-color4bg">
         <div className="max-w-[420px]">
            <SectionTitle
               title="Vamos trabalhar juntos ? Entre em contato"
               subTitle="contato"
            />

            <motion.form
               onSubmit={handleSubmit(onSubimit)}
               className="flex flex-col gap-4 pt-10"
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, x: 100 }}
               transition={{ duration: 0.5 }}
            >
               <input
                  className="
                  w-full 
                  h-14 
                  p-4 
                  rounded-lg 
                  bg-gray-800 
                  text-color2text 
                  placeholder:text-color3text
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
                  text-color2text 
                  placeholder:text-color3text
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
                  text-color2text 
                  placeholder:text-color3text
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
                  <Button className='shadow-button' disabled={isSubmitting}>
                     Enviar mensagem
                     <HiArrowNarrowRight size={18} />
                  </Button>
               </div>
            </motion.form>
         </div>
      </div>
   )
}