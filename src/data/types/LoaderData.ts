import { DonatePageStrapiContent } from '../interfaces/donate-page/DonatePageStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { OurWorkPageStrapiContent } from '../interfaces/our-work-page/OurWorkPageStrapiContent';

export type LoaderData = {
  landingPageStrapiData: LandingPageStrapiContent;
  ourWorkPageStrapiData: OurWorkPageStrapiContent;
  donatePageStrapiData: DonatePageStrapiContent;
};
