import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getFooterStrapiData,
  getNavigationBarStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    loader: async () => {
      const [navigationBarStrapiData, footerStrapiData] = await Promise.all([
        getNavigationBarStrapiData(),
        getFooterStrapiData(),
      ]);
      return { navigationBarStrapiData, footerStrapiData };
    },
  },
]);

export default router;
