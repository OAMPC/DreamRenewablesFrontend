import { OurWorkPageStrapiContent } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import BaseFactory from '../BaseFactory';

class OurWorkPageFactory extends BaseFactory<OurWorkPageStrapiContent> {
  constructor() {
    super(
      ourWorkPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-work-page?`
    );
  }
}

export default OurWorkPageFactory;
