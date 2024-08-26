import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    loader: async () => {
      const [navigationBarStrapiData, footerStrapiData, landingPageStrapiData] =
        await Promise.all([
          getNavigationBarStrapiData(),
          getFooterStrapiData(),
          getLandingPageStrapiData(),
        ]);
      return {
        navigationBarStrapiData,
        footerStrapiData,
        landingPageStrapiData,
      };
    },
  },
]);

export default router;
