import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>

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
