import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { queryConfig } from './lib/queryclient';
import { MainErrorFallback } from './components/error';
import { ThemeProvider } from './lib/contexts';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <HelmetProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
