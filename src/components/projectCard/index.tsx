import Image from "next/image";
import { HorizontalDivider } from "../horizontalDivider";
import { BsFillSquareFill } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'


type ProjectCardProps = {
   image: string
   title: string
   text: string
   link: string
   technologies: string[]
}

export function ProjectCard({ image, title, text, link, technologies }: ProjectCardProps) {
   return (
      <div>
         <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <Image
               className="w-full h-[200px] lg:w-[420px] lg:h-[300px] object-cover rounded-lg"
               src={image}
               alt={`Thumbnail do projeto ${title}`}
               width={420}
               height={300}
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

               <a 
                  className="flex gap-3 items-center hover:text-color1text transition" 
                  href={link} 
                  target='blank'
               >
                  Ver projeto
                  <HiArrowNarrowRight size={20}/>
               </a>
            </div>
         </div>
         <HorizontalDivider />
      </div>
   )
}