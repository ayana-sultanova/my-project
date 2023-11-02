import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

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
