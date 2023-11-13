import React from 'react'
import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const DarkThemeDecorator: Decorator = (Story) => (
    <body className={Theme.DARK}>
    <ThemeProvider initialTheme={Theme.DARK}>
        <Story/>
    </ThemeProvider>
    </body>
)
