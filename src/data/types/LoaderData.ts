import { AboutUsPageStrapiContent } from '../interfaces/about-us-page/AboutUsPageStrapiContent';
import { GetInvolvedPageStrapiContent } from '../interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { OurDonorsPageStrapiContent } from '../interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../interfaces/our-team-page/OurTeamPageStrapiContent';
import { OurWorkPageStrapiContent } from '../interfaces/our-work-page/OurWorkPageStrapiContent';

export type LoaderData = {
  landingPageStrapiData: LandingPageStrapiContent;
  ourMissionVisionAndValuesStrapiData: OurMissionVisionAndValuesPageStrapiContent;
  ourTeamPageStrapiData: OurTeamPageStrapiContent;
  ourDonorsPageStrapiData: OurDonorsPageStrapiContent;
  aboutUsPageStrapiData: AboutUsPageStrapiContent;
  ourWorkPageStrapiData: OurWorkPageStrapiContent;
  getInvolvedPageStrapiData: GetInvolvedPageStrapiContent;
};
