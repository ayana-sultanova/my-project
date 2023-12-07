import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ArticleList } from 'enteties/Article/ui/ArticleList/ArticleList'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageAction, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../model/selectors/articlePageSelectors'
import { type ArticleView, ArticleViewSelector } from 'enteties/Article'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage'
import { initArticlesPage } from '../model/services/initArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useDispatch()
  const articles = useSelector(getArticles.selectAll)
  // const error = useSelector(getArticlesPageError)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageAction.setView(view))
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  return (
      <DynamicModuleLoader reducers={reducers}>
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames('', {}, [className])}
        >
            <ArticleViewSelector view={view} onClickView={onChangeView} />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
