import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Profile } from '../../types/ProfileSchema'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Вы ввели неправльный логин или пароль')
    }
  }
)
