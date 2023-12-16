import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'

export interface ArticleDetailsRecommendationSchema extends EntityState<Article> {
  error?: string
  isLoading?: boolean
}
