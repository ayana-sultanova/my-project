import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from 'enteties/Country'

const meta = {
  title: 'shared/CountySelect',
  component: CountrySelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
