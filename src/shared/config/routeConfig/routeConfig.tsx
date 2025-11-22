import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/:id',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<RouteProps> = [
    { path: RoutePath[AppRoutes.MAIN], element: <MainPage /> },
    { path: RoutePath[AppRoutes.ABOUT], element: <AboutPage /> },
    { path: RoutePath[AppRoutes.NOT_FOUND], element: <NotFoundPage /> },
];
