import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { getBlogPostsStrapiData } from './api/strapiApi';
import LandingPage from './pages/landing-page/LandingPage';
import OurMissionVisionAndValuesPage from './pages/our-mission-vision-and-values-page/OurMissionVisionAndValuesPage';
import OurTeamPage from './pages/our-team-page/OurTeamPage';
import OurDonorsPage from './pages/our-donors-page/OurDonorsPage';
import AboutUsPage from './pages/about-us-page/AboutUsPage';
import OurWorkPage from './pages/our-work-page/OurWorkPage';
import GetInvolvedPage from './pages/get-involved-page/GetInvolvedPage';
import DonatePage from './pages/donate-page/DonatePage';
import BlogPostTemplatePage from './pages/blog-post-template-page/BlogPostTemplatePage';
import { BlogPostsTemplatePageStrapiContent } from './data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import BlogHomePage from './pages/blog-home-page/BlogHomePage';
import {
  getMostRecentPosts,
  sortBlogPostsNewestToOldest,
} from './util/blogHelper';
import OurWorkSubPage from './pages/our-work-sub-page/OurWorkSubPage';

const createRoutes = async () => {
  const blogPages: BlogPostsTemplatePageStrapiContent =
    await getBlogPostsStrapiData();

  const sortedBlogPages = sortBlogPostsNewestToOldest(blogPages);
  const blogPageRoutes = sortedBlogPages.map((blogPage) => {
    return {
      path: `/blog/${blogPage.attributes.url}`,
      element: (
        <BlogPostTemplatePage
          strapiData={blogPage.attributes}
          recentBlogPosts={{
            data: getMostRecentPosts(
              { data: sortedBlogPages },
              blogPage.attributes
            ),
          }}
        />
      ),
    };
  });

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
    ...blogPageRoutes,
  ];

  return createBrowserRouter(routes);
};
export default createRoutes;
