import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Profile } from '../../types/ProfileSchema'

export const fetchProfileData = createAsyncThunk<
Profile,
string,
ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`)

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Вы ввели неправильный логин или пароль')
    }
  }
)
