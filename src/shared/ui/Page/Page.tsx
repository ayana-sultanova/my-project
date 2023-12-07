import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { memo, useRef, type ReactNode, type MutableRefObject } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInifiniteScroll/useInifiniteScroll'

interface PageProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const triggerRef = useRef() as MutableRefObject<HTMLElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })
  return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
          <section ref={triggerRef}/>
        </section>
  )
})
