import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'enteties/Counter'
import { Page } from 'shared/ui/Page/Page'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
        <Page>
             {/* <BugButton /> */}
            {t('Главная страница')}
            <Counter />
        </Page>
  )
}

export default MainPage
