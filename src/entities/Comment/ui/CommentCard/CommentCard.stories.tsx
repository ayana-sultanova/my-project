import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'VAsya' },
      text: 'cdcfd'
    }
  }
}

export const ISLoading: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'VAsya' },
      text: 'cdcfd'
    },
    isLoading: true
  }
}
