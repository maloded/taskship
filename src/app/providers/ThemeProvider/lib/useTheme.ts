import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        if (setTheme) {
            const newTheme = theme === Theme.NIGHT ? Theme.DAY : Theme.NIGHT;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    };

    return {
        theme: theme || Theme.DAY,
        toggleTheme: changeTheme,
    };
};
