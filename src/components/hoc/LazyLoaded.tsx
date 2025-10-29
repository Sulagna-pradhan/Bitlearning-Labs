import React, { Suspense } from 'react';
import FullLoader from '../ui/FullLoader';

export const _LazyWithSuspensePage = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  Loader?: React.ComponentType,
) => {
  const LazyComp = React.lazy(importFn);

  function WrappedLazyComponent(props: React.ComponentProps<T>) {
    return (
      <Suspense fallback={Loader ? <Loader /> : <FullLoader />}>
        <LazyComp {...props} />
      </Suspense>
    );
  }

  return WrappedLazyComponent;
};

export const _LazyPage = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
) => {
  return React.lazy(importFn);
};
