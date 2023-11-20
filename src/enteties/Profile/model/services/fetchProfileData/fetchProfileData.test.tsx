import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Country } from 'enteties/Country'
import { Currency } from 'enteties/Currency'

const data = {
  username: 'admin',
  name: 'Ayana',
  lastName: 'Sultanoa',
  age: 23,
  country: Country.Kyrgyzstan,
  city: 'QQQ',
  currency: Currency.EUR
}
describe('fetchProfileData', () => {
  test('success', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(fetchProfileData)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })
  test('error', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
