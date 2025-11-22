import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DayIcon from 'shared/assets/icons/day.svg';
import NightIcon from 'shared/assets/icons/night.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            { theme === Theme.DAY ? <NightIcon /> : <DayIcon /> }
        </Button>
    );
};
