type ButtonProps = {
  children: any
  onClick?: any
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className='
        bg-color2bg
        py-3 
        px-4 
        rounded-lg 
        text-gray-50 
        flex 
        justify-center 
        items-center 
        gap-2 
        hover:bg-color1bg
        transition-all 
        disabled:opacity-50
        shadow-button
   '>
      {children}
    </button>
  )
}