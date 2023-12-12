import { combineReducers } from 'redux'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'
import {
  articleDetailsPageRecommendationReducer
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationReducer,
  comments: articleDetailsCommentsReducer
})
