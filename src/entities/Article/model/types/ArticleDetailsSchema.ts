import { type Article } from './ArticleSchema'

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: Article
}
