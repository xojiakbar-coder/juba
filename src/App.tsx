import { Suspense, useMemo } from 'react';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import getRoutesData from './router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Splash } from './interface/components/Splash';

const App = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);
  return (
    <Suspense fallback={<Splash />}>
      <Notifications autoClose={2000} />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
