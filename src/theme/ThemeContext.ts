import {createContext, Dispatch, SetStateAction} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: string;
    setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps | undefined>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
