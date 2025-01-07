import { OurWorkPageStrapiContent } from '../../../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import OurWorkPageStrapiResponse from '../../../../fixtures/ourWorkPageStrapiResponse.json';
import BaseFactory from '../BaseFactory';

class OurWorkPageFactory extends BaseFactory<OurWorkPageStrapiContent> {
  constructor() {
    super(
      OurWorkPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-work-page?populate[0]=landingImage.image&populate[1]=quote&populate[2]=metrics&populate[3]=accordionSection.accordionItems&populate[4]=accordionSection.accordionItems.linkIcon`
    );
  }
}

export default OurWorkPageFactory;
