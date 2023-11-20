import { type StateSchema } from 'app/providers/StoryProvider'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          username: 'admin',
          name: 'Ayana'
        }
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual({
      username: 'admin',
      name: 'Ayana'
    })
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
