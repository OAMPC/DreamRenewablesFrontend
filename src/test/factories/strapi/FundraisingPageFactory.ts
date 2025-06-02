import fundraisingPageStrapiResponse from '../../../../fixtures/fundraisingPageStrapiResponse.json';
import { FundraisingPageStrapiContent } from '../../../data/interfaces/fundraising-page/FundraisingPageStrapiContent';

import BaseFactory from '../BaseFactory';

class FundraisingPageFactory extends BaseFactory<FundraisingPageStrapiContent> {
  constructor() {
    super(
      fundraisingPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/fundraising-page?populate[0]=landingCard.image&populate[1]=sections.image&populate[2]=sections.link&populate[3]=sections.linkIcon&populate[4]=paymentSection.paymentOptions&populate[5]=paymentSection.paymentOptionIcon`
    );
  }
}

export default FundraisingPageFactory;
