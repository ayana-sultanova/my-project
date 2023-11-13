import React from 'react'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoryProvider'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const globalDecorator: Decorator = (Story) => (
  // <body className={Theme.LIGHT}>
        <StoreProvider initialState={{ loginForm: { username: '12gfyr', password: 'vvvgr', isLoading: true } }}>
            <ThemeProvider initialTheme={Theme.LIGHT}>
                <BrowserRouter>
                    <Story/>
                </BrowserRouter>
            </ThemeProvider>
        </StoreProvider>
  // </body>
)
