import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  getAboutUsPageStrapiData,
  getBlogPostsStrapiData,
  getDonatePageStrapiData,
  getGetInvolvedPageStrapiData,
  getLandingPageStrapiData,
  getOurDonorsPageStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
  getOurWorkPageStrapiData,
  getOurWorkSubPagesStrapiData,
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
import { StatTemplatePagesStrapiContent } from './data/interfaces/stat-template-page/StatTemplatePagesStrapiContent';
import BlogPostTemplatePage from './pages/blog-post-template-page/BlogPostTemplatePage';
import { BlogPostsTemplatePageStrapiContent } from './data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import BlogHomePage from './pages/blog-home-page/BlogHomePage';
import {
  getMostRecentPosts,
  sortBlogPostsNewestToOldest,
} from './util/blogHelper';

const createRoutes = async () => {
  const ourWorkSubPages: StatTemplatePagesStrapiContent =
    await getOurWorkSubPagesStrapiData();

  const blogPages: BlogPostsTemplatePageStrapiContent =
    await getBlogPostsStrapiData();

  const dynamicOurWorkSubPageRoutes = ourWorkSubPages.data.map(
    (ourWorkSubPage) => ({
      path: `/our-work/${ourWorkSubPage.attributes.url}`,
      element: <StatTemplatePage strapiData={ourWorkSubPage.attributes} />,
    })
  );

  const sortedBlogPages = sortBlogPostsNewestToOldest(blogPages);
  const blogPageRoutes = sortedBlogPages.map((blogPage, index) => {
    return {
      path: `/blog/${blogPage.attributes.url}`,
      element: (
        <BlogPostTemplatePage
          strapiData={blogPage.attributes}
          recentBlogPosts={{
            data: getMostRecentPosts(
              { data: sortedBlogPages },
              blogPage.attributes,
              index
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
      path: '/blog-home',
      element: <BlogHomePage blogPages={blogPages} />,
    },
    ...dynamicOurWorkSubPageRoutes,
    ...blogPageRoutes,
  ];

  return createBrowserRouter(routes);
};
export default createRoutes;
