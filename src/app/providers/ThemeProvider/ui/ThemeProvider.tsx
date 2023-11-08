import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeContextProps } from '../lib/ThemeContext'
import { type FC, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT

export interface ThemeProviderProps {
  initialTheme?: Theme
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    initialTheme,
    children
  } = props
  const [theme, setTheme] = useState(initialTheme || defaultTheme)

  const defaultProps = useMemo((): ThemeContextProps => ({
    theme,
    setTheme
  }), [theme])
  return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
