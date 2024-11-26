import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getLandingPageStrapiData,
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
      const landingPageStrapiData = await getLandingPageStrapiData();
      return {
        landingPageStrapiData,
      };
    },
  },

  {
    path: '/our-mission-vision-and-values',
    element: <OurMissionVisionAndValuesPage />,
    loader: async () => {
      const ourMissionVisionAndValuesStrapiData =
        await getOurMissionVisionAndValuesPageStrapiData();
      return {
        ourMissionVisionAndValuesStrapiData,
      };
    },
  },
  {
    path: '/our-team',
    element: <OurTeamPage />,
    loader: async () => {
      const ourTeamPageStrapiData = await getOurTeamPageStrapiData();
      return {
        ourTeamPageStrapiData,
      };
    },
  },
]);

export default router;
