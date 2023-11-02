import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
export const Dark: Story = {
  args: {},
  decorators: [
    DarkThemeDecorator
  ]
}
