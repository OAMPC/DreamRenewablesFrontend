import { AboutUsPageStrapiContent } from '../interfaces/about-us-page/AboutUsPageStrapiContent';
import { DonatePageStrapiContent } from '../interfaces/donate-page/DonatePageStrapiContent';
import { GetInvolvedPageStrapiContent } from '../interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { OurDonorsPageStrapiContent } from '../interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { OurWorkPageStrapiContent } from '../interfaces/our-work-page/OurWorkPageStrapiContent';

export type LoaderData = {
  landingPageStrapiData: LandingPageStrapiContent;
  ourDonorsPageStrapiData: OurDonorsPageStrapiContent;
  aboutUsPageStrapiData: AboutUsPageStrapiContent;
  ourWorkPageStrapiData: OurWorkPageStrapiContent;
  getInvolvedPageStrapiData: GetInvolvedPageStrapiContent;
  donatePageStrapiData: DonatePageStrapiContent;
};
