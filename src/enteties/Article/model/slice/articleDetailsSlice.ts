import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type Profile, type ProfileSchema } from '../types/ProfileSchema'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validateError = undefined
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateError = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
        state.validateError = undefined
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.validateError = action.payload
      })
  }
})

export const { actions: profileActions } = articleSlice
export const { reducer: profileReducer } = articleSlice
