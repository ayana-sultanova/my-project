import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesDetailPage } from './ArticlesDetailPage'

const meta = {
  title: 'shared/ArticlesDetailPage',
  component: ArticlesDetailPage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticlesDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
