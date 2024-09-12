import {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const BlackButton = ({children, ...props} : ButtonProps) => {
    return (
        <button className="ui-bg-[#374742] ui-w-full hover:ui-bg-[#546e7a] ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded focus:ui-outline-none focus:ui-shadow-outline" {...props}>
            {children}
        </button>
    )
}
