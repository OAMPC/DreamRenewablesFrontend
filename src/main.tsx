import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/loading/Loading';
import { SharedDataProvider } from './contexts/SharedDataProvider';
import createRoutes from './routes';
import './index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoutes().then((router) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <SharedDataProvider>
          <RouterProvider router={router} fallbackElement={<Loading />} />
        </SharedDataProvider>
      </QueryClientProvider>
    </StrictMode>
  );
});
