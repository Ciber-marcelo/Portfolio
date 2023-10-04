import Image from "next/image";

type ExperienceProps = {
   image: string
   companyName: string
   officeName: string
   time: string
   text: string
   technologies: string[]
}

export function ExperienceItem({ image, companyName, officeName, time, text, technologies }: ExperienceProps) {
   return (
      <div className="grid grid-cols-[40px,1fr] gap-4">
         <div className=" w-12 flex flex-col items-center gap-4">
            <Image
               className='rounded-full border-[2px] border-gray-500'
               src={image}
               alt={`Thumbnail da empresa ${companyName}`}
               width={40}
               height={40}
            />
            <div className='h-full w-[2px] bg-gray-800' />
         </div>

         <div className="flex flex-col gap-2">
            <p className="text-gray-500">@ {companyName}</p>
            <h4 className="text-gray-300">{officeName}</h4>
            <p className="text-gray-500">{time}</p>
            <p className="text-gray-400">{text}</p>
            <p className="text-gray-400 text-sm mt-6 font-semibold">Competências</p>

            <div className='flex flex-wrap gap-x-2 gap-y-3 mb-8 lg:max-w-[340px]'>
               {technologies.map((item) => (
                  <span key={item} className='text-color1text bg-color1bg text-sm py-1 px-3 rounded-lg'>
                     {item}
                  </span>
               ))}
            </div>
         </div>
      </div>
   )
}