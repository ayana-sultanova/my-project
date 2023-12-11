import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
import { ArticleView, type Article, ArticleSortField } from './model/types/ArticleSchema'
import { articleDetailsSlice } from './model/slice/articleDetailsSlice'
import { getArticleDetailsData } from './model/selectors/articleDetails'
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'

export {
  ArticleDetails,
  type Article,
  articleDetailsSlice,
  getArticleDetailsData,
  ArticleView,
  ArticleViewSelector,
  ArticleSortField
}
