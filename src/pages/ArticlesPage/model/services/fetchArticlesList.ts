import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Article } from 'enteties/Article'
import {
  getArticlesPageLimit, getArticlesPageNum,
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort
} from 'pages/ArticlesPage/model/selectors/articlePageSelectors'
import { addQueryParams } from 'shared/lib/url/addQuerryParams/addQueryParams'
interface FetchArticlesListProps {
  replace?: boolean
}
export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const page = getArticlesPageNum(getState())
    const limit = getArticlesPageLimit(getState())

    try {
      addQueryParams(
        {
          order,
          sort,
          search
        }
      )
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _order: order,
          _sort: sort,
          q: search
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
