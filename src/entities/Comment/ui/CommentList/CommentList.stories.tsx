import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    comments: [{
      id: '1',
      user: { id: '1', username: 'VAsya' },
      text: 'cdcfd'
    }]
  }
}

export const ISLoading: Story = {
  args: {
    isLoading: true
  }
}
