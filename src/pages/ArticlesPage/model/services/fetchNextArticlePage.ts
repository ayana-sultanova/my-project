import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum
} from '../selectors/articlePageSelectors'
import { articlesPageAction } from '../slices/articlesPageSlice'
import { fetchArticlesList } from './fetchArticlesList'

export const fetchNextArticlePage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageAction.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  }
)
