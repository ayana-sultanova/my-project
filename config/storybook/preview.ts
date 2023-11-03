import type { Preview } from '@storybook/react'
import { LightThemeDecorator } from '../../src/shared/lib/storybook/LightThemeDecorator'
import { withRouterDecorator } from '../../src/shared/lib/storybook/withRouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    LightThemeDecorator,
    withRouterDecorator
  ]
}

export default preview
