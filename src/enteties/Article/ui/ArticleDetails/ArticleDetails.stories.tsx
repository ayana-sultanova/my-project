import type { Meta, StoryObj } from '@storybook/react'
import { ArtcileDetails } from './ArtcileDetails'

const meta = {
  title: 'shared/ArtcileDetails',
  component: ArtcileDetails,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArtcileDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {}
}
