import { QueryClient } from '@tanstack/react-query';

/*
  Global configuration of QueryClient object
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // cache the fetched data for 1min
    },
  },
});

export default queryClient;
