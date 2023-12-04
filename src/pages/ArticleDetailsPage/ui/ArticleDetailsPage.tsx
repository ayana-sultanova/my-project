import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'enteties/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'enteties/Comment'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from '../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  // const error = useSelector(getArticleCommentsError)
  const dispatch = useDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])
  if (!id) {
    return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
    )
  }

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
