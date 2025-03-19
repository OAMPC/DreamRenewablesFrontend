import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';
import OurTeamPage from './pages/our-team-page/OurTeamPage';
import OurDonorsPage from './pages/our-donors-page/OurDonorsPage';
import AboutUsPage from './pages/about-us-page/AboutUsPage';
import OurWorkPage from './pages/our-work-page/OurWorkPage';
import GetInvolvedPage from './pages/get-involved-page/GetInvolvedPage';
import DonatePage from './pages/donate-page/DonatePage';
import BlogHomePage from './pages/blog-home-page/BlogHomePage';
import OurWorkSubPage from './pages/our-work-sub-page/OurWorkSubPage';
import BlogPage from './pages/blog-page/BlogPage';

const createRoutes = async () => {
  const routes = [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/our-mission-vision-and-values',
      element: <OurMissionVisionAndValuesPage />,
    },
    {
      path: '/our-team',
      element: <OurTeamPage />,
    },
    {
      path: '/our-donors',
      element: <OurDonorsPage />,
    },
    {
      path: '/about-us',
      element: <AboutUsPage />,
    },
    {
      path: '/get-involved',
      element: <GetInvolvedPage />,
    },
    {
      path: '/donate',
      element: <DonatePage />,
    },
    {
      path: '/our-work',
      element: <OurWorkPage />,
    },
    {
      path: '/our-work/:slug',
      element: <OurWorkSubPage />,
    },
    {
      path: '/blog-home',
      element: <BlogHomePage />,
    },
    {
      path: '/blog/:slug',
      element: <BlogPage />,
    },
  ];

  return createBrowserRouter(routes);
};
export default createRoutes;
