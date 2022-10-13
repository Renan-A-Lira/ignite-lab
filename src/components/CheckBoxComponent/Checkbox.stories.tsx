import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../TextComponent/Text";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,

    args: {
        
    },
    decorators: [
        story => {
            return (
                <div className="flex items-center gap-2">
                    {story()}
                    <Text size="sm">Aceito os Termos e Condições</Text>
                </div>
            )
        },
    ]

} as Meta<CheckboxProps>


export const Default: StoryObj<CheckboxProps> = {

}