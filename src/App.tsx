import { Suspense, useMemo } from 'react';

import getRoutesData from './router';
import { Splash } from './interface/components/Splash';
import { instance as i18n } from '@/core/services/i18n';

import { I18nextProvider } from 'react-i18next';
import { Notifications } from '@mantine/notifications';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider as ServiceProvider } from '@/core/context/servicesContext';
import ContentLanguageProvider from '@/core/context/contentLanguage/Provider';

const App = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);
  return (
    <Suspense fallback={<Splash />}>
      <I18nextProvider i18n={i18n}>
        <ContentLanguageProvider>
          <ServiceProvider>
            <Notifications autoClose={2000} />
            <RouterProvider router={router} />
          </ServiceProvider>
        </ContentLanguageProvider>
      </I18nextProvider>
    </Suspense>
  );
};

export default App;
