import { type Article, type ArticleView } from 'enteties/Article'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  _inited: boolean
  // pagination
  page: number
  limit?: number
  hasMore: boolean
}
