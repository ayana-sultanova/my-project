import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import image from '../../assets/tests/storybook.jpg'

const meta = {
  title: 'shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    Svg: image
  }
}
