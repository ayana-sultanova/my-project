import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/ProfileSchema'

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
describe('updateProfileData', () => {
  test('success', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })
  test('error', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })
})
test('validate error', async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const thunk = new TestAsyncThunk(updateProfileData, {
    profile: {
      form: { ...data, lastName: '' }
    }
  })
  const result = await thunk.callThunk('1')

  expect(result.meta.requestStatus).toBe('rejected')
  expect(result.payload).toEqual([
    ValidateProfileError.SERVER_ERROR
  ])
})
