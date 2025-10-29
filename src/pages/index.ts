/* This is a bad code 

import Homepage from './Home';
import NotFoundPage from './NotFound';

*/

/* This is a good code (wrap the application with Suspense component with fallback loader) */
import React from 'react';

const Homepage = React.lazy(() => import('./Home'));
const NotFoundPage = React.lazy(() => import('./NotFound'));

export { Homepage, NotFoundPage };
