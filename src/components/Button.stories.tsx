import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button', // Titulo e Pasta dentro do Storybook.
    component: Button,
    args: {
        children: 'Create Account',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}