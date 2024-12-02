import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { OurDonorsPageStrapiContent } from '../interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../interfaces/our-team-page/OurTeamPageStrapiContent';

export type LoaderData = {
  landingPageStrapiData: LandingPageStrapiContent;
  ourMissionVisionAndValuesStrapiData: OurMissionVisionAndValuesPageStrapiContent;
  ourTeamPageStrapiData: OurTeamPageStrapiContent;
  ourDonorsPageStrapiData: OurDonorsPageStrapiContent;
};
