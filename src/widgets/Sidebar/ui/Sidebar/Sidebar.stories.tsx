import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'
import { StoreProvider } from 'app/providers/StoryProvider'

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
  args: {},
  decorators: [
    (story) => <StoreProvider initialState={
      {
        user: { authData: {} }
      }
    }>{story()}</StoreProvider>,
    DarkThemeDecorator
  ]
}
export const Dark: Story = {
  args: {},
  decorators: [
    (story) => <StoreProvider initialState={
      {
        user: {
          authData: {}
        }
      }
    }>{story()}</StoreProvider>,
    DarkThemeDecorator
  ]
}
export const NoAuth: Story = {
  args: {},
  decorators: [
    (story) => <StoreProvider initialState={
      {
        user: {}
      }
    }>{story()}</StoreProvider>,
    DarkThemeDecorator
  ]
}
