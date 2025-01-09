import getInvolvedPageStrapiResponse from '../../../../fixtures/aboutUsPageStrapiResponse.json';
import { GetInvolvedPageStrapiContent } from '../../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';

import BaseFactory from '../BaseFactory';

class GetInvolvedPageFactory extends BaseFactory<GetInvolvedPageStrapiContent> {
  constructor() {
    super(
      getInvolvedPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/get-involved-page?`
    );
  }
}

export default GetInvolvedPageFactory;
