import ourWorkSubPagesStrapiResponse from '../../../../fixtures/ourWorkSubPagesStrapiResponse.json';
import { StatTemplatePageStrapiContent } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class OurWorkSubPagesFactory extends BaseCollectionFactory<StatTemplatePageStrapiContent> {
  constructor() {
    super(
      ourWorkSubPagesStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-work-sub-pages?filters[url][$eq]=training-and-advocacy&populate[0]=landingImage.image&populate[1]=quote&populate[2]=metrics`
    );
  }
}

export default OurWorkSubPagesFactory;
