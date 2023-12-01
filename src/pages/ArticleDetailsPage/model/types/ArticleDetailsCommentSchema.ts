import { type EntityState } from '@reduxjs/toolkit'
import { type Comment } from 'enteties/Comment'

export interface ArticleDetailsCommentSchema extends EntityState<Comment> {
  error?: string
  isLoading?: boolean
}
