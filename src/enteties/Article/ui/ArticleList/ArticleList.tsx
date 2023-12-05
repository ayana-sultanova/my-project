import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
// import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { type Article, ArticleView } from '../../model/types/ArticleSchema'
import { ArticleListItem } from 'enteties/Article/ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'enteties/Article/ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    articles,
    isLoading = true
  } = props
  // const { t } = useTranslation()

  if (isLoading) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.BIG ? 3 : 9)
                  .fill(0)
                  .map((article, index) => <ArticleListItemSkeleton key={index} view={view}/>)}
            </div>
    )
  }
  const rednderArticles = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
        />
  )

  return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.length
              ? (
                  articles.map(rednderArticles)
                )
              : null}
        </div>
  )
})
