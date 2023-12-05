import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Article } from 'enteties/Article'

export const fetchArticlesList = createAsyncThunk<
Article[],
void,
ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
        }
      })

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Error')
    }
  }
)
