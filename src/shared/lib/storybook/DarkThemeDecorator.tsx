import React from 'react'
import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const DarkThemeDecorator: Decorator = (Story) => (
    <ThemeProvider initialTheme={Theme.DARK}>
        <div style={{ width: '100vh' }} className={'app dark'}>
            <Story/>
        </div>
    </ThemeProvider>
)
