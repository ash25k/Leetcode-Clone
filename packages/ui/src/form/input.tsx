import {InputHTMLAttributes, FC} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{};

export const Input:FC<InputProps> = (props) => {
    return (
        <input className="ui-mb-5 ui-appearance-none ui-border ui-border-gray-400 ui-w-full ui-py-2 ui-px-3 ui-text-gray-700  focus:ui-outline-none " {...props}/>
    )
}
