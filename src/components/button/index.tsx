type ButtonProps = {
   name: string
}

export function Button({ name }: ButtonProps) {
  return (
    <button className='
         color2bg
         py-3 
         px-4 
         rounded-lg 
         text-gray-50 
         flex 
         justify-center 
         items-center 
         gap-2 
         hover:color1bg 
         transition-all 
         disabled:opacity-50
   '>
      {name}
    </button>
  )
}