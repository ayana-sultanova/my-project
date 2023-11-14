import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreProvider } from 'app/providers/StoryProvider'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
export const WithError: Story = {
  decorators: [
    (Story) => (
        <StoreProvider initialState={{ loginForm: { username: '12gfyr', password: 'vvvgr', error: 'ERROR' } }}>
            <Story />
        </StoreProvider>
    )
  ],
  args: {}
}
export const Loading: Story = {
  decorators: [
    (Story) => (
        <StoreProvider initialState={{ loginForm: { username: '12gfyr', password: 'vvvgr', isLoading: true } }}>
            <Story />
        </StoreProvider>
    )
  ],
  args: {}
}
