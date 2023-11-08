import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  args: {
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'TextText Text Text Text Text Text Text Text'
  }
}

export const Dark: Story = {
  decorators: [DarkThemeDecorator],
  args: {
    isOpen: true,
    children: 'TextText Text Text Text Text Text Text Text'
  }
}
