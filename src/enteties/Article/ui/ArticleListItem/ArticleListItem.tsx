import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/ArticleSchema'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from 'enteties/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import EyeIcon from 'shared/assets/icons/eye.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}
export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target = ArticleView.SMALL } = props
  const { t } = useTranslation()

  const views = <Text text={String(article.views)} className={cls.views}/>

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

    return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <Text title={article.title} />
                    <Text text={article.type.join(' ')} className={cls.types}/>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    { textBlock &&
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    }
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                        <Button>{t('Читать дальше...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
    )
  }

  return (
      <AppLink
          target={target}
          to={RoutePath.article_details + article.id}
      >
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types}/>
                    {views}
                     <Icon Svg={EyeIcon} />
                </div>
                <Text title={article.title} className={cls.title}/>
            </Card>
        </div>
      </AppLink>
  )
})
