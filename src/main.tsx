import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';

import router from './router.tsx';
import queryClient from './lib/queryclient';
import { ThemeProvider } from './lib/contexts';
import './index.css';

/*
  Don't directly fetch any data inside any components, use react-query functions. It caches the result and has more features, you have to explore.
*/

/*
  Always use useSuspenseQuery and wrap the component/page with React.Suspense and a fallback loader component. It asynchronously fetchs the data, block the renderer to render the page and while fetching data show the loader component. Wrap the direct component/page not any layout with Suspense component otherwise it overlaps with children inside the layout. (refer HomePage.tsx, router.tsx)
*/

/*
  Always create hook for common functionality accross multiple pages. Wrap them with useMemo if they are doing resource heavy task. (refer 'hooks' folder and Homepage.tsx)
*/

/*
  User 'components/ui' folder to primary component (direct html elements with custom style and features). Don't create any complex components like chart, sidebar, modal, form inside the ui folder. They belong to direct 'components' folder.
*/

/*
  Always import pages/components using React.lazy if any asynchronous data is fetched inside the components. You can show a skeleton loader or spinner while fetching data, use fallback for that. (refer pages/index.ts, router.tsx, Homepage.tsx)
*/

/*
  Use react context API and hook for state management, wrap the layout/page with provider and you can access the data and functions using hook. Example - user dashboard, admin dashboard etc. (they all have a fix layout but multiple pages and we need the data accross pages, after fetched once. refer ThemeProvider.tsx, main.tsx)
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
