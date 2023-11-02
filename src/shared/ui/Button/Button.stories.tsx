import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}
export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}
export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
export const OutlineDark: Story = {
  decorators: [
    DarkThemeDecorator
  ],
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
