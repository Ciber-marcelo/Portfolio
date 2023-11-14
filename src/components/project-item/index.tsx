import Image from "next/image";
import { HorizontalDivider } from "../horizontal-divider";
import { BsFillSquareFill } from 'react-icons/bs'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'

import { Button } from "../button";

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
      <div>
         <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <Image
               className="w-full h-[200px] lg:w-[420px] lg:h-[300px] object-cover rounded-lg border-4 border-color1bg"
               src={image}
               alt={`Thumbnail do projeto ${title}`}
               width={1400}
               height={1000}
            />

            <div className="flex flex-col gap-6">
               <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                  <BsFillSquareFill />
                  {title}
               </h3>

               <p className="text-gray-400">
                  {text}
               </p>

               <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                  {technologies.map((item) => (
                     <span key={item} className='text-color1text bg-color1bg text-sm py-1 px-3 rounded-lg'>
                        {item}
                     </span>
                  ))}
               </div>

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
      </div>
   )
}