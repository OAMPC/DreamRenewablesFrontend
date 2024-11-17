import axios from 'axios';
import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';

const strapiConfig = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
  },
};

export async function getNavigationBarStrapiData(): Promise<NavigationBarStrapiContent> {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/navigation-bar?populate[0]=brandImage&populate[1]=standardLinks&populate[2]=dropdownLinks.nestedLinks&populate[3]=button`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export async function getFooterStrapiData(): Promise<FooterStrapiContent> {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/footer?populate[0]=image&populate[1]=navigationLinks.standardLinks&populate[2]=socialMediaLinks.iconLinks.icon&populate[3]=contactInformation.icon`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export async function getLandingPageStrapiData(): Promise<LandingPageStrapiContent> {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImageDesktop.image&populate[1]=landingImageMobile.image&populate[2]=videoSection&populate[3]=specialitySection.specialityCarousel.image&populate[4]=specialitySection.specialityCarousel.link&populate[5]=specialitySection.specialityCarousel.linkIcon&populate[6]=paymentSection.paymentOptions&populate[7]=paymentSection.paymentOptionIcon&populate[8]=quoteSection.quoteCarousel&populate[9]=quoteSection.quoteIcon`,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}

export async function getOurMissionVisionAndValuesPageStrapiData(): Promise<OurMissionVisionAndValuesPageStrapiContent> {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/mission-vision-and-values-page?populate[0]=ourMissionSection.titleIcon&populate[1]=ourMissionSection.sectionImage&populate[2]=ourVisionSection.titleIcon&populate[3]=ourVisionSection.sectionImage&populate[4]=ourValuesSection.titleIcon&populate[5]=ourValuesSection.sectionImage&populate[6]=ourValuesSection.ourValuesEntries `,
      strapiConfig
    );
    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}
