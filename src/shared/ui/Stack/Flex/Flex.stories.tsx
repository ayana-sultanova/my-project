import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
  title: 'shared/Flex',
  component: Flex,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    children: (<>
    </>)
  }
}

export const Column: Story = {
  args: {
    children: (
        <>
    </>),
    direction: 'column'
  }
}
