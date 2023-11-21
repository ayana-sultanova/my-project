import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesDetailPageProps {
  className?: string
}

const ArticlesDetailPage = ({ className }: ArticlesDetailPageProps) => {
  const { t } = useTranslation('articles')

  return (
        <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>

        </div>
  )
}

export default memo(ArticlesDetailPage)
