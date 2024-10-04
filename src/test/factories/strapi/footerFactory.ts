import footerResponse from '../../../../fixtures/footerStrapiResponse.json';
import { FooterStrapiContent } from '../../../data/interfaces/footer/FooterStrapiContent';
import { EmptyMockData } from '../../../data/interfaces/util/EmptyMockData';

class FooterFactory {
  public mockResponse;
  public mockData: FooterStrapiContent;
  public apiUrl: string;
  public emptyMockData: EmptyMockData;

  constructor() {
    this.mockResponse = footerResponse;
    this.mockData = footerResponse.data.attributes;
    this.apiUrl = `${import.meta.env.VITE_BASE_URL}/api/footer?populate[0]=image&populate[1]=navigationLinks.standardLinks&populate[2]=socialMediaLinks.iconLinks.icon&populate[3]=contactInformation.icon`;
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

  public getApiUrl() {
    return this.apiUrl;
  }

  public getEmptyMockData() {
    return this.emptyMockData;
  }
}

export default FooterFactory;
