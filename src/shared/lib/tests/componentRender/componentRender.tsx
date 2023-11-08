import { type ReactNode } from 'react'
import i18nForTests from '../../../config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderProps {
  route?: string
}

export function componentRender (component: ReactNode, options: componentRenderProps = {}) {
  const {
    route = '/'
  } = options
  console.log(route)
  return render(
        <MemoryRouter>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
  )
}
