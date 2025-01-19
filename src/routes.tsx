import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getAboutUsPageStrapiData,
  getDonatePageStrapiData,
  getGetInvolvedPageStrapiData,
  getLandingPageStrapiData,
  getOurDonorsPageStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
  getOurWorkPageStrapiData,
  getOurWorkSubPageStrapiData,
} from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';
import OurTeamPage from './pages/our-team-page/OurTeamPage';
import OurDonorsPage from './pages/our-donors-page/OurDonorsPage';
import AboutUsPage from './pages/about-us-page/AboutUsPage';
import OurWorkPage from './pages/our-work-page/OurWorkPage';
import GetInvolvedPage from './pages/get-involved-page/GetInvolvedPage';
import DonatePage from './pages/donate-page/DonatePage';
import StatTemplatePage from './pages/stat-template-page/StatTemplatePage';
import { OurWorkSubPages } from './data/enums/OurWorkSubPages';

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
  {
    path: '/about-us',
    element: <AboutUsPage />,
    loader: async () => {
      const aboutUsPageStrapiData = await getAboutUsPageStrapiData();
      return {
        aboutUsPageStrapiData,
      };
    },
  },
  {
    path: '/get-involved',
    element: <GetInvolvedPage />,
    loader: async () => {
      const getInvolvedPageStrapiData = await getGetInvolvedPageStrapiData();
      return {
        getInvolvedPageStrapiData,
      };
    },
  },
  {
    path: '/donate',
    element: <DonatePage />,
    loader: async () => {
      const donatePageStrapiData = await getDonatePageStrapiData();
      return {
        donatePageStrapiData,
      };
    },
  },
  {
    path: '/our-work',
    element: <OurWorkPage />,
    loader: async () => {
      const ourWorkPageStrapiData = await getOurWorkPageStrapiData();
      return {
        ourWorkPageStrapiData,
      };
    },
  },
  {
    path: '/our-work/training-and-advocacy',
    element: <StatTemplatePage />,
    loader: async () => {
      const statTemplatePageStrapiData = await getOurWorkSubPageStrapiData(
        OurWorkSubPages.TrainingAndAdvocacy
      );
      return {
        statTemplatePageStrapiData,
      };
    },
  },
  {
    path: '/our-work/entrepreneurship',
    element: <StatTemplatePage />,
    loader: async () => {
      const statTemplatePageStrapiData = await getOurWorkSubPageStrapiData(
        OurWorkSubPages.Entrepreneurship
      );
      return {
        statTemplatePageStrapiData,
      };
    },
  },
]);

export default router;
