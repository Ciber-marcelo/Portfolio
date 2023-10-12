type TitleProps = {
   title: string
   subTitle: string
}

export function SectionTitle({ title, subTitle}: TitleProps) {
   return (
      <div className='flex flex-col gap-4'>
         <span className="font-mono text-sm text-color1text">
               ../{subTitle}
         </span>

         <h3 className="text-3xl font-medium">
               {title}
         </h3>
      </div>
   )
}