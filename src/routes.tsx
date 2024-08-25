import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
]);

export default router;
