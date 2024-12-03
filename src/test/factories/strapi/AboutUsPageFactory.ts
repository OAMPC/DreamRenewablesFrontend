import aboutUsPageStrapiResponse from '../../../../fixtures/aboutUsPageStrapiResponse.json';
import { AboutUsPageStrapiContent } from '../../../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import BaseFactory from '../BaseFactory';

class AboutUsPageFactory extends BaseFactory<AboutUsPageStrapiContent> {
  constructor() {
    super(
      aboutUsPageStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/about-us-page?populate[0]=landingImage.image&populate[1]=sections.image&populate[2]=sections.link&populate[3]=sections.linkIcon`
    );
  }
}

export default AboutUsPageFactory;