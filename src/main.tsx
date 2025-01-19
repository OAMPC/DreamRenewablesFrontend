import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/loading/Loading';
import './index.scss';
import { SharedDataProvider } from './contexts/SharedDataProvider';
import createRoutes from './routes';

createRoutes().then((router) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <SharedDataProvider>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </SharedDataProvider>
    </StrictMode>
  );
});
