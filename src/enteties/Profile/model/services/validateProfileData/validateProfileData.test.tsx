import { validateProfileData } from './validateProfileData'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'
import { ValidateProfileError } from 'enteties/Profile'

const data = {
  username: 'admin',
  name: 'Ayana',
  lastName: 'Sultanoa',
  age: 23,
  country: Country.Kyrgyzstan,
  city: 'QQQ',
  currency: Currency.EUR
}
describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })
  test('without name and lastName', () => {
    const result = validateProfileData({ ...data, name: '', lastName: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
  test('incorrect username', () => {
    const result = validateProfileData({ ...data, username: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME])
  })
  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USERNAME
    ])
  })
})
