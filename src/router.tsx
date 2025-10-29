import React from 'react';
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
        element: (
          <React.Suspense
            fallback={
              <div className="w-full h-screen bg-zinc-700 text-white flex items-center justify-center">
                <h2>Loading....</h2>
              </div>
            }
          >
            <Homepage />
          </React.Suspense>
        ),
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
