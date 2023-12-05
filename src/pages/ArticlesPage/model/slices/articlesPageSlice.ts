import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoryProvider'
import { type Article, ArticleView } from 'enteties/Article'
import { type ArticlesPageSchema } from '../types/ArticlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)
const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: state => {
      state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: PayloadAction<Article[]>
      ) => {
        state.isLoading = false
        articlesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.error = action.payload
      })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageAction } = articlesPageSlice
