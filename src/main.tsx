import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/loading/Loading';
import './index.css';
import router from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </StrictMode>
);
