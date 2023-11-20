import { type StateSchema } from 'app/providers/StoryProvider'
import { getProfileIsloading } from './getProfileIsloading'

describe('getProfileIsloading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(getProfileIsloading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsloading(state as StateSchema)).toEqual(undefined)
  })
})
