import annualReportsStrapiResponse from '../../../../fixtures/annualReportsStrapiResponse.json';
import { AnnualReportStrapiContent } from '../../../data/interfaces/annual-reports-page/AnnualReportStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class AnnualReportsFactory extends BaseCollectionFactory<AnnualReportStrapiContent> {
  constructor() {
    super(
      annualReportsStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/annual-reports?sort[0]=datePublished:desc&populate[0]=cardImage`
    );
  }
}

export default AnnualReportsFactory;
