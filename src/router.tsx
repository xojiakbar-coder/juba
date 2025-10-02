import { type RouteObject } from 'react-router-dom';
import queryString from 'query-string';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import HomeLayout from '@/layouts/Home/Home';

import ContentLanguageProvider from '@/core/context/contentLanguage/Provider';

import { ErrorBoundary } from 'react-error-boundary';

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
        <ContentLanguageProvider>
          <HomeLayout />
        </ContentLanguageProvider>
      </QueryParamProvider>
    ),
    errorElement: <ErrorBoundary fallback={<div>Something went wrong</div>} />,
    children: [
      {
        path: '/',
        async lazy() {
          const { View } = await import('@/pages/Home/View');

          return { Component: View };
        }
      }
    ]
  }
];

export default getRoutesData;
