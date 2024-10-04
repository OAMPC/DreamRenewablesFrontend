import { describe, expect, test } from 'vitest';
import { AXIOS_MOCK } from '../test-setup';
import footerFactory from '../test/factories/strapi/footerFactory';
import navigationBarFactory from '../test/factories/strapi/navigationBarFactory';
import {
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
} from './strapiApi';
import LandingPageFactory from '../test/factories/strapi/LandingPageFactory';

interface MockData<T> {
  data: {
    attributes: T;
  };
}

describe('strapiApi', () => {
  const setup = async <T>(
    apiUrl: string,
    mockData: MockData<T>,
    statusCode: number
  ) => {
    AXIOS_MOCK.onGet(apiUrl).replyOnce(statusCode, mockData);
  };

  describe('getNavigationBarStrapiData', async () => {
    test('should get navigation bar data successfully', async () => {
      const { navBarUrl, mockData } = navigationBarFactory();
      await setup(navBarUrl, mockData, 200);

      const response = await getNavigationBarStrapiData();
      expect(response).toEqual(mockData.data.attributes);
    });

    test('should handle errors when navigation bar "get" returns a 500', async () => {
      const { navBarUrl, emptyNavBarMockData } = navigationBarFactory();
      await setup(navBarUrl, emptyNavBarMockData, 500);
      await expect(getNavigationBarStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getFooterStrapiData', async () => {
    test('should get footer data successfully', async () => {
      const { footerUrl, mockData } = footerFactory();
      await setup(footerUrl, mockData, 200);

      const response = await getFooterStrapiData();
      expect(response).toEqual(mockData.data.attributes);
    });

    test('should handle errors when navigation bar "get" returns a 500', async () => {
      const { footerUrl, emptyFooterMockData } = footerFactory();
      await setup(footerUrl, emptyFooterMockData, 500);
      await expect(getFooterStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });

  describe('getLandingPageStrapiData', () => {
    test('should get landing page data successfully', async () => {
      const landingPageFactory = new LandingPageFactory();
      const mockResponse = landingPageFactory.getMockResponse();
      const landingPageUrl = landingPageFactory.getLandingPageUrl();
      await setup(landingPageUrl, mockResponse, 200);

      const response = await getLandingPageStrapiData();
      expect(response).toEqual(mockResponse.data.attributes);
    });

    test('should handle errors when landing page "get" returns a 500', async () => {
      const landingPageFactory = new LandingPageFactory();
      const emptyMockData = landingPageFactory.getEmptyMockData();
      const landingPageUrl = landingPageFactory.getLandingPageUrl();
      await setup(landingPageUrl, emptyMockData, 500);
      await expect(getLandingPageStrapiData()).rejects.toThrow(
        'Request failed with status code 500'
      );
    });
  });
});
