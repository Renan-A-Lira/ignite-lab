import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode } from "react"

export interface ButtonProps {
    asChild: boolean
    children: ReactNode
}


export const Button = ({asChild, children}: ButtonProps) => {

    const Comp = asChild ? Slot : 'button'


    return (
        <Comp 
        className={clsx(
            'py-3 px-4 bg-cyan-500 font-semibold rounded text-black text-sm w-full',
            'hover:bg-cyan-300 transition-colors duration-500'
        )}
        >
            {children}
        </Comp>
    )
}