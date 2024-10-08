import footerResponse from '../../../../fixtures/footerStrapiResponse.json';
import { FooterStrapiContent } from '../../../data/interfaces/footer/FooterStrapiContent';
import BaseFactory from '../BaseFactory';

class FooterFactory extends BaseFactory<FooterStrapiContent> {
  constructor() {
    super(
      footerResponse,
      `${import.meta.env.VITE_BASE_URL}/api/footer?populate[0]=image&populate[1]=navigationLinks.standardLinks&populate[2]=socialMediaLinks.iconLinks.icon&populate[3]=contactInformation.icon`
    );
  }
}

export default FooterFactory;
