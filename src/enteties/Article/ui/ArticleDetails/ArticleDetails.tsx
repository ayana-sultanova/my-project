import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from 'enteties/Article/model/selectors/articleDetails'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/ArticleSchema'
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const data = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
      default:
        return null
    }
  }, [])

  const isLoading = useSelector(getArticleDetailsIsLoading)
  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])
  let content

  if (isLoading) {
    content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={200}/>
            </>
    )
  } else if (error) {
    content = (
            <Text align={TextAlign.CENTER} text={t('Произошла ошибка при загрузки статьи')}/>
    )
  } else {
    content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        src={data?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </div>

                <Text
                    title={data?.title}
                    text={data?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={data?.createdAt}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={data?.createdAt}/>
                </div>
                {data?.blocks.map(renderBlock)}
            </>
    )
  }

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArtcileDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
  )
})
