import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { type CSSProperties } from 'react'

interface SkeletonProps {
  className?: string
  height?: number | string
  width?: string | number
  border?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }
  return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />

  )
}
