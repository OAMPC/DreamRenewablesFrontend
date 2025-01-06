import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import { buildStrapiEndpointQuery } from './util/buildStrapiEndpointQuery';
import { fetchStrapiData } from './util/fetchStrapiData';
import { OurDonorsPageStrapiContent } from '../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { AboutUsPageStrapiContent } from '../data/interfaces/about-us-page/AboutUsPageStrapiContent';

export async function getNavigationBarStrapiData(): Promise<NavigationBarStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'brandImage',
    'standardLinks',
    'dropdownLinks.nestedLinks',
    'button',
  ]);

  return fetchStrapiData('navigation-bar', query);
}

export async function getFooterStrapiData(): Promise<FooterStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'image',
    'navigationLinks.standardLinks',
    'socialMediaLinks.iconLinks.icon',
    'contactInformation.icon',
  ]);

  return fetchStrapiData('footer', query);
}

export async function getLandingPageStrapiData(): Promise<LandingPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingImageDesktop.image',
    'landingImageMobile.image',
    'videoSection',
    'specialitySection.specialityCarousel.image',
    'specialitySection.specialityCarousel.link',
    'specialitySection.specialityCarousel.linkIcon',
    'paymentSection.paymentOptions',
    'paymentSection.paymentOptionIcon',
    'quoteSection.quoteCarousel',
    'quoteSection.quoteIcon',
  ]);

  return fetchStrapiData('landing-page', query);
}

export async function getOurMissionVisionAndValuesPageStrapiData(): Promise<OurMissionVisionAndValuesPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'ourMissionSection.titleIcon',
    'ourMissionSection.sectionImage',
    'ourVisionSection.titleIcon',
    'ourVisionSection.sectionImage',
    'ourValuesSection.titleIcon',
    'ourValuesSection.sectionImage',
    'ourValuesSection.ourValuesEntries',
  ]);

  return fetchStrapiData('mission-vision-and-values-page', query);
}

export async function getOurTeamPageStrapiData(): Promise<OurTeamPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'departmentSections',
    'departmentSections.teamProfileDetails',
    'departmentSections.teamProfileDetails.profileImage',
  ]);

  return fetchStrapiData('our-team-page', query);
}

export async function getOurDonorsPageStrapiData(): Promise<OurDonorsPageStrapiContent> {
  const query = buildStrapiEndpointQuery(['ourDonors', 'ourDonors.logo']);
  return fetchStrapiData('our-donors-page', query);
}

export async function getAboutUsPageStrapiData(): Promise<AboutUsPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingImage.image',
    'sections.image',
    'sections.link',
    'sections.linkIcon',
    'imageButtonSection.imageButtons',
    'imageButtonSection.imageButtons.image',
    'imageButtonSection.imageButtons.navigationIcon',
  ]);
  return fetchStrapiData('about-us-page', query);
}
