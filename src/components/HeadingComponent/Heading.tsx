import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode } from "react"


export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    asChild?: boolean,
    children: ReactNode,
    className?: string
}

export const Heading = ({size = 'md', asChild, children, className}: HeadingProps) => {

    const Comp = asChild ? Slot : 'h2'

    return (
        <h2
        className={
            clsx('font-bold text-gray-100', {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg'
            },
            className
            )
        }
        >
            {children}
        </h2>
    )

}