import { FooterStrapiContent } from '../interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { NavigationBarStrapiContent } from '../interfaces/navigation-bar/NavigationBarStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../interfaces/our-team-page/OurTeamPageStrapiContent';

export type LoaderData = {
  navigationBarStrapiData: NavigationBarStrapiContent;
  footerStrapiData: FooterStrapiContent;
  landingPageStrapiData: LandingPageStrapiContent;
  ourMissionVisionAndValuesStrapiData: OurMissionVisionAndValuesPageStrapiContent;
  ourTeamPageStrapiData: OurTeamPageStrapiContent;
};
