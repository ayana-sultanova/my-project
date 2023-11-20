import { createContext, type Dispatch, type SetStateAction } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE = 'app_orange_theme'
}

export interface ThemeContextProps {
  theme: string
  setTheme?: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
