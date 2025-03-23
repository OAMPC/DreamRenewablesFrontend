import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import Loading from './components/loading/Loading';
import NotFoundPage from './pages/not-found-page/NotFoundPage';

const OurMissionVisionAndValuesPage = lazy(
  () =>
    import(
      './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage'
    )
);
const OurTeamPage = lazy(() => import('./pages/our-team-page/OurTeamPage'));
const OurDonorsPage = lazy(
  () => import('./pages/our-donors-page/OurDonorsPage')
);
const AboutUsPage = lazy(() => import('./pages/about-us-page/AboutUsPage'));
const GetInvolvedPage = lazy(
  () => import('./pages/get-involved-page/GetInvolvedPage')
);
const DonatePage = lazy(() => import('./pages/donate-page/DonatePage'));
const OurWorkPage = lazy(() => import('./pages/our-work-page/OurWorkPage'));
const OurWorkSubPage = lazy(
  () => import('./pages/our-work-sub-page/OurWorkSubPage')
);
const BlogHomePage = lazy(() => import('./pages/blog-home-page/BlogHomePage'));
const BlogPage = lazy(() => import('./pages/blog-page/BlogPage'));

const createRoutes = async () => {
  const routes = [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/our-mission-vision-and-values',
      element: (
        <Suspense fallback={<Loading />}>
          <OurMissionVisionAndValuesPage />
        </Suspense>
      ),
    },
    {
      path: '/our-team',
      element: (
        <Suspense fallback={<Loading />}>
          <OurTeamPage />
        </Suspense>
      ),
    },
    {
      path: '/our-donors',
      element: (
        <Suspense fallback={<Loading />}>
          <OurDonorsPage />
        </Suspense>
      ),
    },
    {
      path: '/about-us',
      element: (
        <Suspense fallback={<Loading />}>
          <AboutUsPage />
        </Suspense>
      ),
    },
    {
      path: '/get-involved',
      element: (
        <Suspense fallback={<Loading />}>
          <GetInvolvedPage />
        </Suspense>
      ),
    },
    {
      path: '/donate',
      element: (
        <Suspense fallback={<Loading />}>
          <DonatePage />
        </Suspense>
      ),
    },
    {
      path: '/our-work',
      element: (
        <Suspense fallback={<Loading />}>
          <OurWorkPage />
        </Suspense>
      ),
    },
    {
      path: '/our-work/:slug',
      element: (
        <Suspense fallback={<Loading />}>
          <OurWorkSubPage />
        </Suspense>
      ),
    },
    {
      path: '/blog-home',
      element: (
        <Suspense fallback={<Loading />}>
          <BlogHomePage />
        </Suspense>
      ),
    },
    {
      path: '/blog/:slug',
      element: (
        <Suspense fallback={<Loading />}>
          <BlogPage />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
    {
      path: '/404',
      element: (
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      ),
    },
  ];

  return createBrowserRouter(routes);
};

export default createRoutes;
