import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/ArticleSchema'
import { type SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort?: ArticleSortField
  order?: SortOrder
  onChangeOrder?: (newOrder: SortOrder) => void
  onChangeSort?: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeSort, sort, onChangeOrder, order } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t])
  const sortOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [t])

  return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select
              onChange={onChangeSort}
              options={sortOptions}
              label={t('Сортировать ПО')}
              value={sort}
          />
          <Select
              onChange={onChangeOrder}
              options={orderOptions}
              label={t('по')}
              value={order}
          />

        </div>
  )
})
