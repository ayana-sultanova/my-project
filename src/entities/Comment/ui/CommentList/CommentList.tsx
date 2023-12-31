import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { type Comment } from '../../model/types/commentSchema'
import { VStack } from 'shared/ui/Stack'

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
        <VStack gap={'16'} className={classNames('', {}, [className])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
    )
  }
  return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            {comments?.length
              ? comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                    />
              ))
              : <Text text={t('Комментарии отсутствуют')} />
            }
        </VStack>
  )
})
