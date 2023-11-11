import { createContext, type Dispatch, type SetStateAction } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
  theme?: string
  setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps | undefined>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
