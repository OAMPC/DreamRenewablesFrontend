import donatePageStrapiResponse from '../../../../fixtures/donatePageStrapiResponse.json';
import { DonatePageStrapiContent } from '../../../data/interfaces/donate-page/DonatePageStrapiContent';
import BaseFactory from '../BaseFactory';

class DonatePageFactory extends BaseFactory<DonatePageStrapiContent> {
  constructor() {
    super(
      donatePageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/donate-page?populate[0]=landingCard.image&populate[1]=metrics&populate[2]=paymentSection.paymentOptions&populate[3]=paymentSection.paymentOptionIcon`
    );
  }
}

export default DonatePageFactory;
