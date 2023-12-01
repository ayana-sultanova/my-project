import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Article } from '../../types/ArticleSchema'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string> >(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`)

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
