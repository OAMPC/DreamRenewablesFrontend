import { EmptyMockData } from '../../data/interfaces/util/EmptyMockData';
import { StrapiResponseCollection } from '../../data/interfaces/util/StrapiResponseCollection';

abstract class BaseCollectionFactory<T> {
  public mockResponse: StrapiResponseCollection<T>;
  public mockData: Array<{
    attributes: T;
  }>;
  public apiUrl: string;
  public emptyMockData: EmptyMockData;

  constructor(mockResponse: StrapiResponseCollection<T>, apiUrl: string) {
    this.mockResponse = mockResponse;
    this.mockData = mockResponse.data;
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

export default BaseCollectionFactory;
