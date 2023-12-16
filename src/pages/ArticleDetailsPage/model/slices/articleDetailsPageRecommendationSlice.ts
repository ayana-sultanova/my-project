import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type StateSchema } from 'app/providers/StoryProvider'
import { type ArticleDetailsRecommendationSchema } from '../../model/types/ArticleDetailsRecommendationSchema'
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

export const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsPageRecommendationSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {}
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsPageRecommendationActions } = articleDetailsPageRecommendationSlice
export const { reducer: articleDetailsPageRecommendationReducer } = articleDetailsPageRecommendationSlice
