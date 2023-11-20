import { type StateSchema } from 'app/providers/StoryProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from 'enteties/Profile'

describe('getProfileValidateErrors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_USER_DATA
        ]
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
