import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { memo } from 'react'
import { ArticleView } from '../../model/types/ArticleSchema'
import ListIcon from 'shared/assets/icons/lines.svg'
import TiledIcon from 'shared/assets/icons/tiled.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onClickView?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, onClickView, view } = props

  const onClick = (newView: ArticleView) => () => {
    onClickView?.(newView)
  }

  return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', { [cls.selected]: viewType.view === view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
  )
})
