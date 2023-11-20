import { type StateSchema } from 'app/providers/StoryProvider'
import { getProfileData } from './getProfileData'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'

describe('getProfileData', () => {
  test('should return value', () => {
    const data = {
      username: 'admin',
      name: 'Ayana',
      lastName: 'Sultanoa',
      age: 23,
      country: Country.Kyrgyzstan,
      city: 'QQQ',
      currency: Currency.EUR
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
