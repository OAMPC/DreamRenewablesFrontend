import axios from 'axios';
import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import { buildStrapiEndpointQuery } from './util/buildStrapiEndpointQuery';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export async function getStrapiData(endpoint: string, query = {}) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/${endpoint}?${query}`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export async function getNavigationBarStrapiData(): Promise<NavigationBarStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'brandImage',
    'standardLinks',
    'dropdownLinks.nestedLinks',
    'button',
  ]);

  return getStrapiData('navigation-bar', query);
}

export async function getFooterStrapiData(): Promise<FooterStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'image',
    'navigationLinks.standardLinks',
    'socialMediaLinks.iconLinks.icon',
    'contactInformation.icon',
  ]);

  return getStrapiData('footer', query);
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

  return getStrapiData('landing-page', query);
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

  return getStrapiData('mission-vision-and-values-page', query);
}

export async function getOurTeamPageStrapiData(): Promise<OurTeamPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'departmentSections',
    'departmentSections.teamProfileDetails',
    'departmentSections.teamProfileDetails.profileImage',
  ]);

  return getStrapiData('our-team-page', query);
}
