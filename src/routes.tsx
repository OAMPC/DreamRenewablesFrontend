import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import React from 'react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
]);

export default router;
