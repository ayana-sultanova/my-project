import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext, useEffect } from 'react'

interface UseThemeResult {
  theme: string
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK :
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
}
