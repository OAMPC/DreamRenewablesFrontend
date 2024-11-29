import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getLandingPageStrapiData,
  getOurDonorsPageStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';
import OurTeamPage from './pages/our-team-page/OurTeamPage';
import OurDonorsPage from './pages/our-donors-page/OurDonorsPage';

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
  {
    path: '/our-donors',
    element: <OurDonorsPage />,
    loader: async () => {
      const ourDonorsPageStrapiData = await getOurDonorsPageStrapiData();
      return {
        ourDonorsPageStrapiData,
      };
    },
  },
]);

export default router;
