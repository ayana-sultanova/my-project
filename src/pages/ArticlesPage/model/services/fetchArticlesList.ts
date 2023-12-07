import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoryProvider'
import { type Article } from 'enteties/Article'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlePageSelectors'
interface FetchArticlesListProps {
  page: number
}
export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
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
