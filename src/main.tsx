import './bootstrap';

import '@splidejs/react-splide/css';

import '@gfazioli/mantine-marquee/styles.css';
import '@gfazioli/mantine-marquee/styles.layer.css';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/assets/styles/main.scss';

import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { message } from '@/interface/components/Message';
import { MantineProvider } from '@mantine/core';
import { getApiError } from '@/core/utils';

window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

const showApiError = (error: any) => {
  const data = getApiError(error);

  if (data.validations.length > 0) {
    data.validations.forEach((item: string) => {
      message.error(item);
    });
    return;
  }

  data.message && message.error(data.message);
};

const onQueryError = (error: any, query: any) => {
  if (query.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const onMutationError = (error: any, _variables: any, _context: any, mutation: any) => {
  if (mutation.options.meta?.customErrorHandling) return;

  // both 'ECONNABORTED' and 'ERR_NETWORK' can be due to network issue or disconnecting from server
  if (['ECONNABORTED', 'ERR_NETWORK', 'ERR_INTERNET_DISCONNECTED'].includes(error?.code)) {
    console.log('Something');
    // if user is not online
    if (!navigator.onLine) {
      console.error('Internetga ulanmagansiz!');
      return;
    }

    // If user is online, then the issue is with connecting to server
    message.error("Serverga bog'lanib bo'lmayapti!");
    return;
  }

  showApiError(error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  },

  mutationCache: new MutationCache({
    onError: onMutationError
  }),
  queryCache: new QueryCache({
    onError: onQueryError
  })
});

createRoot(document.getElementById('root')!).render(
  <MantineProvider defaultColorScheme="dark">
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </MantineProvider>
);
