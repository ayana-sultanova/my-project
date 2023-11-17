import { type StateSchema } from 'app/providers/StoryProvider'
import { getLoginIsloading } from './getLoginIsloading'

describe('getLoginLoading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginIsloading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsloading(state as StateSchema)).toEqual(false)
  })
})
