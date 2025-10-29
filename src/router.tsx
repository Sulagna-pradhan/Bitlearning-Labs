import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { BaseLayout } from './layouts';
import { DefaultErrorBoundary } from './components/error';
import { Homepage, NotFoundPage } from './pages';
import { paths } from './config/paths';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      Component: BaseLayout,
      ErrorBoundary: DefaultErrorBoundary, // catches async errors like api errors
      children: [
        {
          path: paths.home.path,
          Component: Homepage,
        },
      ],
    },
    {
      path: paths.all.path,
      Component: NotFoundPage,
    },
  ]);

export const AppRouter = () => {
  const router = React.useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
