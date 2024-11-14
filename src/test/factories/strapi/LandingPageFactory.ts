import landingPageResponse from '../../../../fixtures/landingPageStrapiResponse.json';
import { LandingPageStrapiContent } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import BaseFactory from '../BaseFactory';

class LandingPageFactory extends BaseFactory<LandingPageStrapiContent> {
  constructor() {
    super(
      landingPageResponse,
      `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImageDesktop.image&populate[1]=landingImageMobile.image&populate[2]=videoSection&populate[3]=specialitySection.specialityCarousel.image&populate[4]=specialitySection.specialityCarousel.link&populate[5]=specialitySection.specialityCarousel.linkIcon&populate[6]=paymentSection.paymentOptions&populate[7]=paymentSection.paymentOptionIcon&populate[8]=quoteSection.quoteCarousel&populate[9]=quoteSection.quoteIcon`
    );
  }
}

export default LandingPageFactory;
