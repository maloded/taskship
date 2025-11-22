import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Some Error')}</p>
            <Button onClick={() => document.location.reload()}>
                {t('Reload the page')}
            </Button>
        </div>
    );
};
