type CardProps = {
   techName: string
   experience: string
   icon: any
}

export function TechCard({ techName, experience, icon }: CardProps) {
   return (
      <div className='flex p-6 rounded-lg justify-between bg-gray-600/20 text-color4text hover:text-color1text hover:bg-gray-600/30 transition-all'>
         <div className='flex flex-col'>
            <p>{techName}</p>
            <p>{experience} de experiência</p>
         </div>
         <div>{icon}</div>
      </div>
   )
}