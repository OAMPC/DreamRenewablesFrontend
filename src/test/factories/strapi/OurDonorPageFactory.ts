import { OurDonorsPageStrapiContent } from '../../../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import BaseFactory from '../BaseFactory';
import ourDonorsPageStrapiResponse from '../../../../fixtures/ourDonorsPageStrapiResponse.json';

class OurDonorPageFactory extends BaseFactory<OurDonorsPageStrapiContent> {
  constructor() {
    super(
      ourDonorsPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/our-donors-page?populate[0]=ourDonors&populate[1]=ourDonors.logo`
    );
  }
}

export default OurDonorPageFactory;
