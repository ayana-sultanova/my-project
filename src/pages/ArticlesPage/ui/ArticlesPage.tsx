import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ArticleList } from 'enteties/Article/ui/ArticleList/ArticleList'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageAction, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../model/services/fetchArticlesList'
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../model/selectors/articlePageSelectors'
import { type ArticleView, ArticleViewSelector } from 'enteties/Article'

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

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageAction.initState())
  })
  return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames('', {}, [className])}>
            <ArticleViewSelector view={view} onClickView={onChangeView} />
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
            />
        </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
