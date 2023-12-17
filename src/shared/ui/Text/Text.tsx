import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}
export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1'
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const HeaderTag = mapSizeToHeaderTag[size]

  const adds = [
    className,
    cls[theme],
    cls[align],
    cls[size]
  ]
  return (
        <div className={classNames(cls.Text, {}, adds)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag> }
            {text && <p className={cls.text}>{text}</p> }
        </div>
  )
})
