/* This is a bad code

import Homepage from './Home';
import NotFoundPage from './NotFound';

*/

/* This is a good code (wrap the application with Suspense component with fallback loader) */
import { _LazyWithSuspensePage, _LazyPage } from '../components/hoc/LazyLoaded';
import { HomeLoader } from './Home';

const Homepage = _LazyWithSuspensePage(() => import('./Home'), HomeLoader);
const NotFoundPage = _LazyPage(() => import('./NotFound'));

export { Homepage, NotFoundPage };
