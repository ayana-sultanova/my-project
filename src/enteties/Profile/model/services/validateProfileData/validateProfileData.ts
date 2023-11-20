import { type Profile, ValidateProfileError } from '../../types/ProfileSchema'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }
  const { name, lastName, age, username } = profile

  const errors: ValidateProfileError[] = []
  if (!name && !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age && !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME)
  }
  return errors
}
