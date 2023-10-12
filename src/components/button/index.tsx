import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={(
        `
        bg-color2bg 
        min-w-[170px] 
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
        ${className}
        `
      )}
      {...props}
    >
      {children}
    </button>
  )
}