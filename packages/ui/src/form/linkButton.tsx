import {ButtonHTMLAttributes} from 'react'

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const LinkButton = ({children, ...props} : LinkButtonProps) => {
  return (
    <button className="font-medium ml-1 underline underline-offset-1" {...props}>
        {children}
    </button>
  )
}
