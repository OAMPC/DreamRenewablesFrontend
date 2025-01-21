import { describe, expect, test } from 'vitest';
import { AXIOS_MOCK } from '../test-setup';
import {
  getAboutUsPageStrapiData,
  getBlogPostsStrapiData,
  getDonatePageStrapiData,
  getFooterStrapiData,
  getGetInvolvedPageStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
  getOurDonorsPageStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
  getOurWorkPageStrapiData,
  getOurWorkSubPagesStrapiData,
} from './strapiApi';
import LandingPageFactory from '../test/factories/strapi/LandingPageFactory';
import NavigationBarFactory from '../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../test/factories/strapi/FooterFactory';
import OurMissionVisionAndValuesPageFactory from '../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurTeamPageFactory from '../test/factories/strapi/OurTeamPageFactory';
import OurDonorPageFactory from '../test/factories/strapi/OurDonorPageFactory';
import AboutUsPageFactory from '../test/factories/strapi/AboutUsPageFactory';
import OurWorkPageFactory from '../test/factories/strapi/OurWorkPageFactory';
import GetInvolvedPageFactory from '../test/factories/strapi/GetInvolvedPageFactory';
import DonatePageFactory from '../test/factories/strapi/DonatePageFactory';
import OurWorkSubPagesFactory from '../test/factories/strapi/OurWorkSubPagesFactory';
import { StrapiResponseCollection } from '../data/interfaces/util/StrapiResponseCollection';
import { StrapiResponse } from '../data/interfaces/util/StrapiResponse';
import BlogPostsFactory from '../test/factories/strapi/BlogPostsFactory';

describe('strapiApi', () => {
  const setup = async <T>(
    apiUrl: string,
    mockData: StrapiResponse<T> | StrapiResponseCollection<T>,
    statusCode: number
  ) => {
    AXIOS_MOCK.onGet(apiUrl).replyOnce(statusCode, mockData);
  };

  describe('getNavigationBarStrapiData', async () => {
    test('should get navigation bar data successfully', async () => {
      const navigationBarFactory = new NavigationBarFactory();
      const mockResponse = navigationBarFactory.getMockResponse();
      const apiUrl = navigationBarFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getNavigationBarStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when navigation bar "get" returns a 500', async () => {
      const navigationBarFactory = new NavigationBarFactory();
      const emptyMockData = navigationBarFactory.getEmptyMockData();
      const apiUrl = navigationBarFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getNavigationBarStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getFooterStrapiData', async () => {
    test('should get footer data successfully', async () => {
      const footerFactory = new FooterFactory();
      const apiUrl = footerFactory.getApiUrl();
      const mockResponse = footerFactory.getMockResponse();
      await setup(apiUrl, mockResponse, 200);

      const response = await getFooterStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when navigation bar "get" returns a 500', async () => {
      const footerFactory = new FooterFactory();
      const apiUrl = footerFactory.getApiUrl();
      const emptyMockData = footerFactory.getEmptyMockData();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getFooterStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getLandingPageStrapiData', () => {
    test('should get landing page data successfully', async () => {
      const landingPageFactory = new LandingPageFactory();
      const mockResponse = landingPageFactory.getMockResponse();
      const apiUrl = landingPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getLandingPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when landing page "get" returns a 500', async () => {
      const landingPageFactory = new LandingPageFactory();
      const emptyMockData = landingPageFactory.getEmptyMockData();
      const apiUrl = landingPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getLandingPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getOurMissionVisionAndValuesPageStrapiData', () => {
    test('should get our mission vision and values page data successfully', async () => {
      const ourMissionVisionAndValuesPageFactory =
        new OurMissionVisionAndValuesPageFactory();
      const mockResponse =
        ourMissionVisionAndValuesPageFactory.getMockResponse();
      const apiUrl = ourMissionVisionAndValuesPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getOurMissionVisionAndValuesPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when our mission vision and values page "get" returns a 500', async () => {
      const ourMissionVisionAndValuesPageFactory =
        new OurMissionVisionAndValuesPageFactory();
      const emptyMockData =
        ourMissionVisionAndValuesPageFactory.getEmptyMockData();
      const apiUrl = ourMissionVisionAndValuesPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(
        getOurMissionVisionAndValuesPageStrapiData()
      ).rejects.toThrow('Request failed with status code 500');
    });
  });

  describe('getOurTeamPageStrapiData', () => {
    test('should get our team page data successfully', async () => {
      const ourTeamPageFactory = new OurTeamPageFactory();
      const mockResponse = ourTeamPageFactory.getMockResponse();
      const apiUrl = ourTeamPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getOurTeamPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when our team page "get" returns a 500', async () => {
      const ourTeamPageFactory = new OurTeamPageFactory();
      const emptyMockData = ourTeamPageFactory.getEmptyMockData();
      const apiUrl = ourTeamPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getOurTeamPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getOurDonorsPageStrapiData', () => {
    test('should get our donors page data successfully', async () => {
      const ourDonorPageFactory = new OurDonorPageFactory();
      const mockResponse = ourDonorPageFactory.getMockResponse();
      const apiUrl = ourDonorPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getOurDonorsPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when our donor page "get" returns a 500', async () => {
      const ourDonorPageFactory = new OurDonorPageFactory();
      const emptyMockData = ourDonorPageFactory.getEmptyMockData();
      const apiUrl = ourDonorPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getOurDonorsPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getAboutUsPageStrapiData', () => {
    test('should get about us page data successfully', async () => {
      const aboutUsPageFactory = new AboutUsPageFactory();
      const mockResponse = aboutUsPageFactory.getMockResponse();
      const apiUrl = aboutUsPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getAboutUsPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when get about us page "get" returns a 500', async () => {
      const aboutUsPageFactory = new AboutUsPageFactory();
      const emptyMockData = aboutUsPageFactory.getEmptyMockData();
      const apiUrl = aboutUsPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getAboutUsPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getOurWorkPageStrapiData', () => {
    test('should get our work page data successfully', async () => {
      const ourWorkPageFactory = new OurWorkPageFactory();
      const mockResponse = ourWorkPageFactory.getMockResponse();
      const apiUrl = ourWorkPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getOurWorkPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when get work page "get" returns a 500', async () => {
      const ourWorkPageFactory = new OurWorkPageFactory();
      const emptyMockData = ourWorkPageFactory.getEmptyMockData();
      const apiUrl = ourWorkPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getOurWorkPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getGetInvolvedPageStrapiData', () => {
    test('should get get involved page data successfully', async () => {
      const getInvolvedPageFactory = new GetInvolvedPageFactory();
      const mockResponse = getInvolvedPageFactory.getMockResponse();
      const apiUrl = getInvolvedPageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getGetInvolvedPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when get get involved page "get" returns a 500', async () => {
      const getInvolvedPageFactory = new GetInvolvedPageFactory();
      const emptyMockData = getInvolvedPageFactory.getEmptyMockData();
      const apiUrl = getInvolvedPageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getGetInvolvedPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getDonatePageStrapiData', () => {
    test('should get donate page data successfully', async () => {
      const getDonatePageFactory = new DonatePageFactory();
      const mockResponse = getDonatePageFactory.getMockResponse();
      const apiUrl = getDonatePageFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getDonatePageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when get donate page data returns a 500', async () => {
      const getDonatePageFactory = new DonatePageFactory();
      const emptyMockData = getDonatePageFactory.getEmptyMockData();
      const apiUrl = getDonatePageFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getDonatePageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getOurWorkSubPagesStrapiData', () => {
    test('should get all data for our work sub pages successfully', async () => {
      const ourWorkSubPagesFactory = new OurWorkSubPagesFactory();
      const mockResponse = ourWorkSubPagesFactory.getMockResponse();
      const apiUrl = ourWorkSubPagesFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getOurWorkSubPagesStrapiData();
      expect(response).toEqual(mockResponse);
    });

    test('should handle errors when get a our work sub page data returns a 500', async () => {
      const ourWorkSubPagesFactory = new OurWorkSubPagesFactory();
      const emptyMockData = ourWorkSubPagesFactory.getEmptyMockData();
      const apiUrl = ourWorkSubPagesFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getOurWorkSubPagesStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getBlogPostsStrapiData', () => {
    test('should get all blog posts strapi data successfully', async () => {
      const blogPostFactory = new BlogPostsFactory();
      const mockResponse = blogPostFactory.getMockResponse();
      const apiUrl = blogPostFactory.getApiUrl();
      await setup(apiUrl, mockResponse, 200);

      const response = await getBlogPostsStrapiData();
      expect(response).toEqual(mockResponse);
    });

    test('should handle errors when get all blog posts strapi data returns a 500', async () => {
      const blogPostFactory = new BlogPostsFactory();
      const emptyMockData = blogPostFactory.getEmptyMockData();
      const apiUrl = blogPostFactory.getApiUrl();
      await setup(apiUrl, emptyMockData, 500);
      await expect(getBlogPostsStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });
});
