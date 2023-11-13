import type { Preview } from '@storybook/react'
import { globalDecorator } from 'shared/lib/storybook/globalDecorator'

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
    globalDecorator
  ]
}

export default preview
