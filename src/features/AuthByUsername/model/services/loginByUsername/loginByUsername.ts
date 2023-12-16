import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/providers/StoryProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string> >(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', authData)
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      if (extra.navigate) {
        extra.navigate('/about')
      }
      return response.data
    } catch (e) {
      return rejectWithValue('Вы ввели неправильный логин или пароль')
    }
  }
)
