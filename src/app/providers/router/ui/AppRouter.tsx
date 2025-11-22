import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Loading...')}</div>}>
            <Routes>
                {routeConfig.map(({ path, element }) => (
                    <Route
                        key={path as string}
                        path={path}
                        element={(
                            <div className="pageWrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
export default AppRouter;
