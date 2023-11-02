import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof MainPage>

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
