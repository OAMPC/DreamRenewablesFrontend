import { describe, expect, test } from 'vitest';
import { AXIOS_MOCK } from '../test-setup';
import {
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
} from './strapiApi';
import LandingPageFactory from '../test/factories/strapi/LandingPageFactory';
import NavigationBarFactory from '../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../test/factories/strapi/FooterFactory';

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
