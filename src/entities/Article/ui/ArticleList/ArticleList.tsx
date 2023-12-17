import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, ArticleView } from '../../model/types/ArticleSchema'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    articles,
    isLoading,
    target
  } = props
  const { t } = useTranslation()

  const renderArticles = (article: Article) => (
        <ArticleListItem
            target={target}
            className={cls.card}
            article={article}
            view={view}
            key={article.id}
        />
  )

  if (!isLoading && !articles?.length) {
    return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      <Text size={TextSize.L} text={t('Статьи не найдены')} />
    </div>
  }
  return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.length
              ? (
                  articles.map(renderArticles)
                )
              : null}
          {isLoading && <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {new Array(view === ArticleView.BIG ? 3 : 9)
              .fill(0)
              .map((article, index) => <ArticleListItemSkeleton key={index} view={view}/>)}
          </div>}
        </div>
  )
})
