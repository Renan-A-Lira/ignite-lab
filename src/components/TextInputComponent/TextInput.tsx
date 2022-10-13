
import { Slot } from '@radix-ui/react-slot'
import {clsx} from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'



export interface TextInputRootProps {
    children?: ReactNode
}

const TextInputRoot = ({children}: TextInputRootProps) => {
    
    return (
        <div
        className={clsx(
                'w-full py-4 px-3 rounded bg-gray-800 h-12',
                'flex items-center gap-3',
                'focus-within:ring-1 ring-cyan-500 duration-300'
                )}
        >
            {children}
        </div>
    )
    
}

export interface TextInputIconProps {
    children: ReactNode
}

const TextInputIcon = (props: TextInputIconProps) => {


    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputInputProps) => {

    return(
        <input
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props} 
        />
    )

}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}