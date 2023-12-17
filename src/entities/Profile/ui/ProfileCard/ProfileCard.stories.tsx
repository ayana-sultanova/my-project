import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import Avatar from 'shared/assets/tests/storybook.jpg'

const meta = {
  title: 'entities/ProfileCard',
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
      first: 'Ayana',
      lastname: 'Sultanoa',
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
