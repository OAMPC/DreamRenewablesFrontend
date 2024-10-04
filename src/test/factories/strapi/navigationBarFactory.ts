import navigationBarResponse from '../../../../fixtures/navigationBarStrapiResponse.json';
import { NavigationBarStrapiContent } from '../../../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { EmptyMockData } from '../../../data/interfaces/util/EmptyMockData';

class NavigationBarFactory {
  public mockResponse;
  public mockData: NavigationBarStrapiContent;
  public apiUrl: string;
  public emptyMockData: EmptyMockData;

  constructor() {
    this.mockResponse = navigationBarResponse;
    this.mockData = navigationBarResponse.data.attributes;
    this.apiUrl = `${import.meta.env.VITE_BASE_URL}/api/navigation-bar?populate[0]=brandImage&populate[1]=standardLinks&populate[2]=dropdownLinks.nestedLinks&populate[3]=button`;
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

export default NavigationBarFactory;
