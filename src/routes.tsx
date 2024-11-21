import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';
import OurTeamPage from './pages/our-team-page/OurTeamPage';

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
    path: '/our-mission-vision-and-values',
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
  {
    path: '/our-team',
    element: <OurTeamPage />,
    loader: async () => {
      const [navigationBarStrapiData, footerStrapiData, ourTeamPageStrapiData] =
        await Promise.all([
          getNavigationBarStrapiData(),
          getFooterStrapiData(),
          getOurTeamPageStrapiData(),
        ]);
      return {
        navigationBarStrapiData,
        footerStrapiData,
        ourTeamPageStrapiData,
      };
    },
  },
]);

export default router;
