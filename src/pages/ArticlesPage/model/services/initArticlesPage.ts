import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { getArticlesPageInited } from '../selectors/articlePageSelectors'
import { articlesPageAction } from '../slices/articlesPageSlice'
import { fetchArticlesList } from './fetchArticlesList'
import { type SortOrder } from 'shared/types'
import { type ArticleSortField } from 'enteties/Article'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const searchFromUrl = searchParams.get('search')
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      if (searchFromUrl) {
        dispatch(articlesPageAction.setSearch(searchFromUrl))
      }
      if (orderFromUrl) {
        dispatch(articlesPageAction.setOrder(orderFromUrl))
      }
      if (sortFromUrl) {
        dispatch(articlesPageAction.setSort(sortFromUrl))
      }

      dispatch(articlesPageAction.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)
