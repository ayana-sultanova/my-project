import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { action } from '@storybook/addon-actions'
import { StoreProvider } from 'app/providers/StoryProvider'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  decorators: [
    (story) => <StoreProvider>{story()}</StoreProvider>
  ],
  args: {
    onSendComment: action('onSendComment')
  }
}
