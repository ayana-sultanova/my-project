import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'enteties/User'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { getArticleDetailsData } from 'enteties/Article'
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
Comment,
string,
ThunkConfig<string>
>(
  'addCommentForm/sendComment',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI
    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }
    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text
      })
      if (!response.data) {
        throw new Error()
      }
      dispatch(fetchCommentsByArticleId(article.id))
      return response.data
    } catch (e) {
      return rejectWithValue('Вы ввели неправильный логин или пароль')
    }
  }
)
