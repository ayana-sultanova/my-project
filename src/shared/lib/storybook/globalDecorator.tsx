import React from 'react'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoryProvider'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const globalDecorator: Decorator = (Story) => (
    <body className={Theme.LIGHT}>
    <StoreProvider
        initialState={{ loginForm: { username: '12gfyr', password: 'vvvgr' } }}
        asyncReducer={defaultAsyncReducer}
    >
        <ThemeProvider initialTheme={Theme.LIGHT}>
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        </ThemeProvider>
    </StoreProvider>
    </body>
)
