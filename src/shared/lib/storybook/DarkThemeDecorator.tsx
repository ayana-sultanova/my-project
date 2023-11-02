import React from 'react'
import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'

export const DarkThemeDecorator: Decorator = (Story) => (
    <div className={'app dark'}>
        <Story/>
    </div>
)
