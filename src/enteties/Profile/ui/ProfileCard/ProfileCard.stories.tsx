import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'
import Avatar from 'shared/assets/tests/storybook.jpg'

const meta = {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      name: 'Ayana',
      lastName: 'Sultanoa',
      avatar: Avatar,
      age: 23,
      country: Country.Kyrgyzstan,
      city: 'QQQ',
      currency: Currency.EUR
    }
  }
}
export const WithError: Story = {
  args: {
    error: 'error'
  }
}

export const ISLoading: Story = {
  args: {
    isLoading: true
  }
}
