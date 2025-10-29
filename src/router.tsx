import { createBrowserRouter } from 'react-router';

import { BaseLayout } from './layouts';
import { Homepage, NotFoundPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
    ],
  },
  {
    // route not found fallback
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
