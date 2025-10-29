import React, { Suspense } from 'react';
import FullLoader from '../ui/FullLoader';

export const _LazyWithSuspensePage = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T; Loader?: React.ComponentType<any> }>,
) => {
  const LazyComponentWithLoader = React.lazy(async () => {
    const module = await importFn();
    const Comp = module.default;
    const Loader = module.Loader;

    return {
      default: function LoadedComponent(props: React.ComponentProps<T>) {
        return (
          <Suspense fallback={Loader ? <Loader /> : <FullLoader />}>
            <Comp {...props} />
          </Suspense>
        );
      },
    };
  });

  return LazyComponentWithLoader;
};

export const _LazyPage = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
) => {
  return React.lazy(importFn);
};
