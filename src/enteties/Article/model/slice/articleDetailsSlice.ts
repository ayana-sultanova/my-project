import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/ArticleSchema'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
