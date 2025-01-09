import getInvolvedPageStrapiResponse from '../../../../fixtures/getInvolvedPageStrapiResponse.json';
import { GetInvolvedPageStrapiContent } from '../../../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';

import BaseFactory from '../BaseFactory';

class GetInvolvedPageFactory extends BaseFactory<GetInvolvedPageStrapiContent> {
  constructor() {
    super(
      getInvolvedPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/get-involved-page?populate[0]=landingCard.image&populate[1]=sections.image&populate[2]=sections.link&populate[3]=sections.linkIcon&populate[4]=paymentSection.paymentOptions&populate[5]=paymentSection.paymentOptionIcon`
    );
  }
}

export default GetInvolvedPageFactory;
