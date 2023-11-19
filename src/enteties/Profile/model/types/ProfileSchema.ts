import { type Country } from 'enteties/Country'
import { type Currency } from 'enteties/Currency'

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
}
