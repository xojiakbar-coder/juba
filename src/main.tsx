import './bootstrap';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles/ModalBase.css';
import '@/assets/styles/main.scss';

import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { message } from '@/interface/components/Message';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (e: any) => {
      message.error(e.data.error);
    }
  }),
  mutationCache: new MutationCache({
    onError: (e: any) => {
      message.error(e.data.error);
    }
  })
});

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ErrorBoundary>
);
