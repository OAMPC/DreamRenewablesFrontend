import { DonatePageStrapiContent } from '../interfaces/donate-page/DonatePageStrapiContent';
import { GetInvolvedPageStrapiContent } from '../interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { OurWorkPageStrapiContent } from '../interfaces/our-work-page/OurWorkPageStrapiContent';

export type LoaderData = {
  landingPageStrapiData: LandingPageStrapiContent;
  ourWorkPageStrapiData: OurWorkPageStrapiContent;
  getInvolvedPageStrapiData: GetInvolvedPageStrapiContent;
  donatePageStrapiData: DonatePageStrapiContent;
};
