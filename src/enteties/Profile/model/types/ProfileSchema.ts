export interface Profile {
  name: string
  lastName: string
  age: number
  currency: string
  country: string
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
