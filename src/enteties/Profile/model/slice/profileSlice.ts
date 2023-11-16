import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'enteties/Profile'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
