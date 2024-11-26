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
  const query = buildStrapiEndpointQuery({
    'populate[0]': 'brandImage',
    'populate[1]': 'standardLinks',
    'populate[2]': 'dropdownLinks.nestedLinks',
    'populate[3]': 'button',
  });

  return getStrapiData('navigation-bar', query);
}

export async function getFooterStrapiData(): Promise<FooterStrapiContent> {
  const query = buildStrapiEndpointQuery({
    'populate[0]': 'image',
    'populate[1]': 'navigationLinks.standardLinks',
    'populate[2]': 'socialMediaLinks.iconLinks.icon',
    'populate[3]': 'contactInformation.icon',
  });

  return getStrapiData('footer', query);
}

export async function getLandingPageStrapiData(): Promise<LandingPageStrapiContent> {
  const query = buildStrapiEndpointQuery({
    'populate[0]': 'landingImageDesktop.image',
    'populate[1]': 'landingImageMobile.image',
    'populate[2]': 'videoSection',
    'populate[3]': 'specialitySection.specialityCarousel.image',
    'populate[4]': 'specialitySection.specialityCarousel.link',
    'populate[5]': 'specialitySection.specialityCarousel.linkIcon',
    'populate[6]': 'paymentSection.paymentOptions',
    'populate[7]': 'paymentSection.paymentOptionIcon',
    'populate[8]': 'quoteSection.quoteCarousel',
    'populate[9]': 'quoteSection.quoteIcon',
  });

  return getStrapiData('landing-page', query);
}

export async function getOurMissionVisionAndValuesPageStrapiData(): Promise<OurMissionVisionAndValuesPageStrapiContent> {
  const query = buildStrapiEndpointQuery({
    'populate[0]': 'ourMissionSection.titleIcon',
    'populate[1]': 'ourMissionSection.sectionImage',
    'populate[2]': 'ourVisionSection.titleIcon',
    'populate[3]': 'ourVisionSection.sectionImage',
    'populate[4]': 'ourValuesSection.titleIcon',
    'populate[5]': 'ourValuesSection.sectionImage',
    'populate[6]': 'ourValuesSection.ourValuesEntries',
  });

  return getStrapiData('mission-vision-and-values-page', query);
}

export async function getOurTeamPageStrapiData(): Promise<OurTeamPageStrapiContent> {
  const query = buildStrapiEndpointQuery({
    'populate[0]': 'departmentSections',
    'populate[1]': 'departmentSections.teamProfileDetails',
    'populate[2]': 'departmentSections.teamProfileDetails.profileImage',
  });

  return getStrapiData('our-team-page', query);
}
