import { ReactNode } from "react"
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{
} 

export const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxPrimitive.Root className="w-6 h-6 bg-gray-800 p-[2px] rounded" {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight="bold" className="text-cyan-300 h-5 w-5" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

