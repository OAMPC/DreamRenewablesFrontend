import { FooterStrapiContent } from '../interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../interfaces/landing-page/LandingPageStrapiContent';
import { NavigationBarStrapiContent } from '../interfaces/navigation-bar/NavigationBarStrapiContent';

export type LoaderData = {
  navigationBarStrapiData: NavigationBarStrapiContent;
  footerStrapiData: FooterStrapiContent;
  landingPageStrapiData: LandingPageStrapiContent;
};
