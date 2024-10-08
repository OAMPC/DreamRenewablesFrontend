import { EmptyMockData } from '../../data/interfaces/util/EmptyMockData';
import { StrapiResponse } from '../../data/interfaces/util/StrapiResponse';

abstract class BaseFactory<T> {
  public mockResponse: StrapiResponse<T>;
  public mockData: T;
  public apiUrl: string;
  public emptyMockData: EmptyMockData;

  constructor(mockResponse: StrapiResponse<T>, apiUrl: string) {
    this.mockResponse = mockResponse;
    this.mockData = mockResponse.data.attributes;
    this.apiUrl = apiUrl;
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

export default BaseFactory;
