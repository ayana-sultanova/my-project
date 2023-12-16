import React from 'react'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoryProvider'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from '../components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
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
