import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
import { ArticleView, type Article } from './model/types/ArticleSchema'
import { articleDetailsSlice } from './model/slice/articleDetailsSlice'
import { getArticleDetailsData } from './model/selectors/articleDetails'

export {
  ArticleDetails,
  type Article,
  articleDetailsSlice,
  getArticleDetailsData,
  ArticleView
}
