import StatTemplatePageStrapiResponse from '../../../../fixtures/statTemplatePageStrapiResponse.json';
import { StatTemplatePageStrapiContent } from '../../../data/interfaces/stat-template-page/StatTemplatePageStrapiContent';
import BaseFactory from '../BaseFactory';

class StatTemplatePageFactory extends BaseFactory<StatTemplatePageStrapiContent> {
  constructor() {
    super(StatTemplatePageStrapiResponse, '');
  }
}

export default StatTemplatePageFactory;
