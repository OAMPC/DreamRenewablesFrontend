import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';

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
  {
    path: '/our-mission-vision-and-values-page',
    element: <OurMissionVisionAndValuesPage />,
    loader: async () => {
      const [
        navigationBarStrapiData,
        footerStrapiData,
        ourMissionVisionAndValuesStrapiData,
      ] = await Promise.all([
        getNavigationBarStrapiData(),
        getFooterStrapiData(),
        getOurMissionVisionAndValuesPageStrapiData(),
      ]);
      return {
        navigationBarStrapiData,
        footerStrapiData,
        ourMissionVisionAndValuesStrapiData,
      };
    },
  },
]);

export default router;
