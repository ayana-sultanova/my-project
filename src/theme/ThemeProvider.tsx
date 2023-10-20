import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT
const ThemeProvider:FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    const defaultProps = useMemo((): ThemeContextProps => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider