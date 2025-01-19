import StatTemplatePageStrapiResponse from '../../../../fixtures/statTemplatePageStrapiResponse.json';
import { OurWorkSubPages } from '../../../data/enums/OurWorkSubPages';
import { StatTemplatePageStrapiContent } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import BaseFactory from '../BaseFactory';

class StatTemplatePageFactory extends BaseFactory<StatTemplatePageStrapiContent> {
  constructor() {
    super(
      StatTemplatePageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-work-sub-pages/${OurWorkSubPages.TrainingAndAdvocacy}?populate[0]=landingImage.image&populate[1]=quote&populate[2]=metrics`
    );
  }
}

export default StatTemplatePageFactory;
