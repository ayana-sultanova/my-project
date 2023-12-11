import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPageFilter.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView
} from '../../model/selectors/articlePageSelectors'
import { type ArticleSortField, type ArticleView, ArticleViewSelector } from 'enteties/Article'
import { articlesPageAction } from '../../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Input } from 'shared/ui/Input/Input'
import { Card } from 'shared/ui/Card/Card'
import { type SortOrder } from 'shared/types'
import { ArticleSortSelector } from 'enteties/Article/ui/ArticleSortSelector/ArticleSortSelector'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'

interface ArticlesPageFilterProps {
  className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageAction.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageAction.setSort(newSort))
    dispatch(articlesPageAction.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageAction.setOrder(newOrder))
    dispatch(articlesPageAction.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageAction.setSearch(search))
    dispatch(articlesPageAction.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}/>
                <ArticleViewSelector view={view} onClickView={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
        </div>
  )
})
