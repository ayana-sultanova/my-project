import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
          {isEdit
            ? <Text title={t('Редактирование статьи с ID =') + id} />
            : <Text title={t('Создание новой статьи')} />
          }
        </div>
  )
})

export default memo(ArticleEditPage)
