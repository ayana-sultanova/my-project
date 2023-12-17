import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import { HStack } from 'shared/ui/Stack'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(RoutePath.article_details + article?.id + 'edit')
  }, [article?.id, navigate])

  return (
        <HStack justify={'between'} className={classNames('', {}, [className])}>
          <Button onClick={onBackToList}>
            {t('Назад к списку')}
          </Button>
            {canEdit &&
                <Button
                onClick={onEditArticle}
            >
                {t('Редактировать')}
            </Button>}
        </HStack>
  )
})
