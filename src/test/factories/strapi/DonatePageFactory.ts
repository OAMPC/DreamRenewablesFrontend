import { DonatePageStrapiContent } from '../../../data/interfaces/donate-page/DonatePageStrapiContent';
import BaseFactory from '../BaseFactory';

class DonatePageFactory extends BaseFactory<DonatePageStrapiContent> {
  constructor() {
    super(
      donatePageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/about-us-page?`
    );
  }
}

export default DonatePageFactory;
