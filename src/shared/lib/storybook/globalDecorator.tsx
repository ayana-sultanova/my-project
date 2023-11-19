import React from 'react'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoryProvider'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'enteties/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const globalDecorator: Decorator = (Story) => (
    <body className={Theme.LIGHT}>
    <BrowserRouter>
        <StoreProvider
            initialState={{ loginForm: { username: '12gfyr', password: 'vvvgr', isLoading: false } }}
            asyncReducer={defaultAsyncReducer}
        >
            <ThemeProvider initialTheme={Theme.LIGHT}>
                <Story/>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
    </body>
)
