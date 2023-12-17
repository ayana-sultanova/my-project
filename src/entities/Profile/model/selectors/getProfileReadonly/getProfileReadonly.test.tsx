import { type StateSchema } from 'app/providers/StoryProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
