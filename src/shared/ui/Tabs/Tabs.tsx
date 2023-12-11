import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
// import { useTranslation } from 'react-i18next'
import React, { memo, type ReactNode } from 'react'
import { Card, CardTheme } from 'shared/ui/Card/Card'

interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value } = props
  // const { t } = useTranslation()

  return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map(tab => (
                    <Card
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        key={tab.value}
                        className={cls.card}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
  )
})
