import React, { Suspense } from 'react';
import queryString from 'query-string';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryParamProvider } from 'use-query-params';
import { type RouteObject, Navigate } from 'react-router-dom';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { Provider as SmoothScrollProvider } from '@/core/context/smoothScroll';

import HomeLayout from '@/layouts/Home/Home';
import { Splash } from './interface/components/Splash';

const HomeView = React.lazy(() => import('@/pages/Home/View').then(m => ({ default: m.View })));
const DetailView = React.lazy(() => import('@/pages/Detail/View').then(m => ({ default: m.View })));

const getRoutesData = (): RouteObject[] => [
  {
    element: (
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: queryString.parse,
          objectToSearchString: queryString.stringify
        }}
      >
        <SmoothScrollProvider>
          <HomeLayout />
        </SmoothScrollProvider>
      </QueryParamProvider>
    ),
    errorElement: <ErrorBoundary fallback={<div>Something went wrong</div>} />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Splash />}>
            <HomeView />
          </Suspense>
        )
      },
      {
        path: 'xizmatlar/:slug',
        element: (
          <Suspense fallback={<Splash />}>
            <DetailView />
          </Suspense>
        )
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
];

export default getRoutesData;
