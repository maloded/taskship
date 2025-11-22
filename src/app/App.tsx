import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`${classNames('app', {}, [theme])}`}>
            <Suspense fallback="">
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
