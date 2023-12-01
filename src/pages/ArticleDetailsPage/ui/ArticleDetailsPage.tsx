import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'enteties/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams()
  if (!id) {
    return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
    )
  }
  return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
  )
}

export default memo(ArticleDetailsPage)
