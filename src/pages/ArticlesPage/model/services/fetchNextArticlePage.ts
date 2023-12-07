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
  'articleDetails/fetchCommentsByArticleId',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesPageIsLoading(getState())
    const hasMore = getArticlesPageHasMore(getState())
    if (hasMore && !isLoading) {
      dispatch(articlesPageAction.setPage(page + 1))
      dispatch(fetchArticlesList({
        page: page + 1
      }))
    }
  }
)
