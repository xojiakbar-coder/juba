

import { useMemo } from 'react';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import getRoutesData from './router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const routes = getRoutesData();

  const router = useMemo(() => {
    return createBrowserRouter(routes);
  }, [routes]);
  return (
    <MantineProvider defaultColorScheme="dark">
      <Notifications autoClose={2000} />
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
