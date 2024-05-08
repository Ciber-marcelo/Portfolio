'use client'

import Image from "next/image";
import { HorizontalDivider } from "../horizontal-divider";
import { BsFillSquareFill } from 'react-icons/bs'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Button } from "../button";
import { motion } from "framer-motion";
import { TechBadge } from "../techBadge";

type ProjectItensProps = {
   image: any
   title: string
   text: string
   link: string
   repo: string
   technologies: string[]
}

export function ProjectItem({ image, title, text, link, repo, technologies }: ProjectItensProps) {
   return (
      <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5 }}
      >
         <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <Image
               className="w-full h-[200px] lg:w-[420px] lg:h-[300px] object-cover rounded-lg border-4 border-color1bg"
               src={image}
               alt={`Thumbnail do projeto ${title}`}
               width={1400}
               height={1000}
            />

            <div className="flex flex-col gap-6">
               <h3 className="flex items-center gap-3 font-medium text-lg text-color2text">
                  <BsFillSquareFill />
                  {title}
               </h3>

               <p className="text-color3text"> 
                  {text}
               </p>

               <TechBadge array={technologies} />

               <div className="flex flex-col sm:flex-row gap-4">
                  <a className="flex flex-col" href={repo} target='blank'>
                     <Button className="min-w-[170px]">
                        <TbBrandGithub size={18} />
                        Repositôrio
                     </Button>
                  </a>

                  <a className="flex flex-col" href={link} target='blank'>
                     <Button className="min-w-[170px]">
                        <FiGlobe size={18} />
                        Projeto Online
                     </Button>
                  </a>
               </div>

            </div>
         </div>
         <HorizontalDivider />
      </motion.div>
   )
}