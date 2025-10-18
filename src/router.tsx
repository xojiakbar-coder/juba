import React from 'react';
import queryString from 'query-string';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryParamProvider } from 'use-query-params';
import { type RouteObject, Navigate } from 'react-router-dom';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import HomeLayout from '@/layouts/Home/Home';

const Home = React.lazy(() => import('@/pages/Home/View').then(m => ({ default: m.View })));
const ServicesLayout = React.lazy(() => import('@/pages/Services/Layout').then(m => ({ default: m.Layout })));

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
        <HomeLayout />
      </QueryParamProvider>
    ),
    errorElement: <ErrorBoundary fallback={<div>Something went wrong</div>} />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'our-services',
        element: <ServicesLayout />,
        children: [
          {
            path: 'smm',
            async lazy() {
              const { Smm } = await import('@/pages/Services/Smm');

              return { Component: Smm };
            }
          },
          {
            path: 'website',
            async lazy() {
              const { Website } = await import('@/pages/Services/Website');

              return { Component: Website };
            }
          },
          {
            path: 'google',
            async lazy() {
              const { Google } = await import('@/pages/Services/Google');

              return { Component: Google };
            }
          },
          {
            path: 'seo',
            async lazy() {
              const { Seo } = await import('@/pages/Services/Seo');

              return { Component: Seo };
            }
          },
          {
            path: 'telegram-bot',
            async lazy() {
              const { Bot } = await import('@/pages/Services/Bot');

              return { Component: Bot };
            }
          },
          {
            path: 'crm',
            async lazy() {
              const { Crm } = await import('@/pages/Services/Crm');

              return { Component: Crm };
            }
          },
          {
            path: 'branding',
            async lazy() {
              const { Branding } = await import('@/pages/Services/Branding');

              return { Component: Branding };
            }
          },
          {
            path: 'target',
            async lazy() {
              const { Target } = await import('@/pages/Services/Target');

              return { Component: Target };
            }
          },
          {
            path: 'advertising',
            async lazy() {
              const { Ads } = await import('@/pages/Services/Ads');

              return { Component: Ads };
            }
          },
          {
            path: 'video-montage',
            async lazy() {
              const { Montaje } = await import('@/pages/Services/Montaje');

              return { Component: Montaje };
            }
          },
          {
            path: 'blogers',
            async lazy() {
              const { Blogers } = await import('@/pages/Services/Blogers');

              return { Component: Blogers };
            }
          },
          {
            path: 'telegram-ads',
            async lazy() {
              const { Telegram } = await import('@/pages/Services/Telegram');

              return { Component: Telegram };
            }
          }
        ]
      },
      {
        path: '/our-services/',
        element: <Navigate to="/our-services/smm" replace />
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
];

export default getRoutesData;
