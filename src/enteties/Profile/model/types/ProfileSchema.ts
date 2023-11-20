import { type Country } from 'enteties/Country'
import { type Currency } from 'enteties/Currency'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
  name?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateError?: ValidateProfileError[]
}
