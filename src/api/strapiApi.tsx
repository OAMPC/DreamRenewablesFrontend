import axios from 'axios';
import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';

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
      `${import.meta.env.VITE_BASE_URL}/api/landing-page?populate[0]=landingImageDesktop.image&populate[1]=landingImageMobile.image&populate[2]=videoSection&populate[3]=specialityCarousel.link&populate[4]=specialityCarousel.specialityImage`,
      strapiConfig
    );
    console.log(response.data);

    return response.data.data.attributes;
  } catch (error) {
    console.error('Error fetching Strapi data:', error);
    throw error;
  }
}
