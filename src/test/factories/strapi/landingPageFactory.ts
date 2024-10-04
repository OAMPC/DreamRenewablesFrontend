import landingPageResponse from '../../../../fixtures/landingPageStrapiResponse.json';
import { LandingPageStrapiContent } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import { EmptyMockData } from '../../../data/interfaces/util/EmptyMockData';

class LandingPageFactory {
  public mockResponse;
  public mockData: LandingPageStrapiContent;
  public landingPageUrl: string;
  public emptyMockData: EmptyMockData;

  constructor() {
    this.mockResponse = landingPageResponse;
    this.mockData = landingPageResponse.data.attributes;
    this.landingPageUrl = `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImageDesktop.image&populate[1]=landingImageMobile.image&populate[2]=videoSection`;
    this.emptyMockData = {
      data: {
        attributes: undefined,
      },
    };
  }

  public getMockResponse() {
    return this.mockResponse;
  }

  public getMockData() {
    return this.mockData;
  }

  public getLandingPageUrl() {
    return this.landingPageUrl;
  }

  public getEmptyMockData() {
    return this.emptyMockData;
  }
}

export default LandingPageFactory;
