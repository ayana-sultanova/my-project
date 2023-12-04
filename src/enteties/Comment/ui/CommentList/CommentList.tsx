import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { type Comment } from '../../model/types/commentSchema'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation()
  const {
    className,
    comments,
    isLoading
  } = props

  if (isLoading) {
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </div>
    )
  }
  return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
              ? comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                        className={cls.comment}
                    />
              ))
              : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
  )
})
