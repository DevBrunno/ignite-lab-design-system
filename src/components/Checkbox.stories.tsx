import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox', // Titulo e Pasta dentro do Storybook.
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
      (Story) => {
         return (
            <div className="flex items-center gap-2">
               {Story()}
               <Text size="sm">Lembrar-me por 30 dias</Text>
            </div>
         )
      }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}