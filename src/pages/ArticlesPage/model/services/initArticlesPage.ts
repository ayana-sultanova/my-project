import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { getArticlesPageInited } from '../selectors/articlePageSelectors'
import { articlesPageAction } from '../slices/articlesPageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const inited = getArticlesPageInited(getState())
    if (!inited) {
      dispatch(articlesPageAction.initState())
      dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)
