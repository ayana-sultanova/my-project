import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { DarkThemeDecorator } from 'shared/lib/storybook/DarkThemeDecorator'
import { StoreProvider } from '../../../app/providers/StoryProvider'
import { Country } from '../../../enteties/Country'
import { Currency } from '../../../enteties/Currency'
import Avatar from 'shared/assets/tests/storybook.jpg'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [
    (story) => <StoreProvider initialState={
      {
        profile: {
          form: {
            username: 'admin',
            first: 'Ayana',
            lastname: 'Sultanova',
            avatar: Avatar,
            age: 23,
            country: Country.Kyrgyzstan,
            city: 'QQQ',
            currency: Currency.EUR
          }
        }
      }
    }>{story()}</StoreProvider>
  ],
  args: {}
}
export const Dark: Story = {
  args: {},
  decorators: [
    (story) => <StoreProvider initialState={
      {
        profile: {
          form: {
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
    }>{story()}</StoreProvider>,
    DarkThemeDecorator
  ]
}
