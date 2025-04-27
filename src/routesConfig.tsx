import React, { lazy, Suspense } from 'react';
import Loading from './components/loading/Loading';
import NotFoundPage from './pages/not-found-page/NotFoundPage';
import LandingPage from './pages/landing-page/LandingPage';
import InternalErrorPage from './pages/internal-error-page/InternalErrorPage';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

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

const PaymentSuccessPage = lazy(
  () => import('./pages/payment-success/PaymentSuccessPage')
);

export const routesConfig = [
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <LandingPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/our-mission-vision-and-values',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OurMissionVisionAndValuesPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/our-team',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OurTeamPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/our-donors',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OurDonorsPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/about-us',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <AboutUsPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/get-involved',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <GetInvolvedPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/donate',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <DonatePage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/payment-success',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <PaymentSuccessPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/our-work',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OurWorkPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/our-work/:slug',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <OurWorkSubPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/blog-home',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <BlogHomePage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/blog/:slug',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <BlogPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/404',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <NotFoundPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/500',
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <InternalErrorPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
];
