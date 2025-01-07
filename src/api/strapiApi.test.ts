import { describe, expect, test } from 'vitest';
import { AXIOS_MOCK } from '../test-setup';
import {
  getAboutUsPageStrapiData,
  getFooterStrapiData,
  getLandingPageStrapiData,
  getNavigationBarStrapiData,
  getOurDonorsPageStrapiData,
  getOurMissionVisionAndValuesPageStrapiData,
  getOurTeamPageStrapiData,
  getOurWorkPageStrapiData,
} from './strapiApi';
import LandingPageFactory from '../test/factories/strapi/LandingPageFactory';
import NavigationBarFactory from '../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../test/factories/strapi/FooterFactory';
import OurMissionVisionAndValuesPageFactory from '../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurTeamPageFactory from '../test/factories/strapi/OurTeamPageFactory';
import OurDonorPageFactory from '../test/factories/strapi/OurDonorPageFactory';
import AboutUsPageFactory from '../test/factories/strapi/AboutUsPageFactory';
import OurWorkPageFactory from '../test/factories/strapi/OurWorkPageFactory';

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

    // test('should handle errors when get about us page "get" returns a 500', async () => {
    //   const aboutUsPageFactory = new AboutUsPageFactory();
    //   const emptyMockData = aboutUsPageFactory.getEmptyMockData();
    //   const apiUrl = aboutUsPageFactory.getApiUrl();
    //   await setup(apiUrl, emptyMockData, 500);
    //   await expect(getAboutUsPageStrapiData()).rejects.toThrow(
    //     'Request failed with status code 500'
    //   );
    // });
  });
});
