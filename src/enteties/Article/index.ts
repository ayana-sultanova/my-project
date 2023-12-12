import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
import { ArticleView, type Article, ArticleSortField, ArticleType } from './model/types/ArticleSchema'
import { articleDetailsSlice } from './model/slice/articleDetailsSlice'
import { getArticleDetailsData } from './model/selectors/articleDetails'
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
import { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs'
import { type ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'

export {
  ArticleDetails,
  type Article,
  articleDetailsSlice,
  getArticleDetailsData,
  ArticleView,
  ArticleViewSelector,
  ArticleSortField,
  ArticleType,
  ArticleTypeTabs,
  type ArticleDetailsSchema
}
