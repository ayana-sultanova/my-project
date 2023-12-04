import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Profile, ValidateProfileError } from '../../types/ProfileSchema'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../../services/validateProfileData/validateProfileData'

export const updateProfileData =
    createAsyncThunk<
    Profile,
    string,
    ThunkConfig<ValidateProfileError[]> >(
      'profile/updateProfileData',
      async (profileId, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData)
        if (errors.length) {
          return rejectWithValue(errors)
        }
        try {
          const response = await extra.api.put<Profile>('/profile/' + profileId, formData)
          if (!response.data) {
            throw new Error()
          }
          return response.data
        } catch (e) {
          return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
      }
    )
