import StatTemplatePageStrapiResponse from '../../../../fixtures/statTemplatePageStrapiResponse.json';
import { StatTemplatePageStrapiContent } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import BaseFactory from '../BaseFactory';

class StatTemplatePageFactory extends BaseFactory<StatTemplatePageStrapiContent> {
  constructor() {
    super(
      StatTemplatePageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/stat-template-page/1?populate[0]=landingImage.image&populate[1]=quote&populate[2]=metrics`
    );
  }
}

export default StatTemplatePageFactory;
