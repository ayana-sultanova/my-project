import { type ProfileSchema } from '../types/ProfileSchema'
import { profileActions, profileReducer } from '../slice/profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
const data = {
  id: '1',
  username: 'admin',
  name: 'Ayana',
  lastName: 'Sultanoa',
  age: 23,
  country: Country.Kyrgyzstan,
  city: 'QQQ',
  currency: Currency.EUR
}
describe('profile', () => {
  test('test setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(false)
    )).toEqual({ readonly: false })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' }, data }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: undefined
    })
  })
  test('test update form', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123' })
    )).toEqual({ form: { username: '123' } })
  })
  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '1', '')
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data
    })
  })
})
