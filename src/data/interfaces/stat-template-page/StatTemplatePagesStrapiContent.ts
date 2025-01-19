import { StatTemplatePageStrapiContent } from './StatTemplatePageStrapiContent';

export interface StatTemplatePagesStrapiContent {
  data: Array<NestedStatTemplatePageStrapiContent>;
}

export interface NestedStatTemplatePageStrapiContent {
  attributes: StatTemplatePageStrapiContent;
}
