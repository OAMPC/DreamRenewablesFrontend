import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import { buildStrapiEndpointQuery } from './util/buildStrapiEndpointQuery';
import { fetchAllStrapiData, fetchStrapiData } from './util/fetchStrapiData';
import { OurDonorsPageStrapiContent } from '../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { AboutUsPageStrapiContent } from '../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import { OurWorkPageStrapiContent } from '../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import { GetInvolvedPageStrapiContent } from '../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { DonatePageStrapiContent } from '../data/interfaces/donate-page/DonatePageStrapiContent';
import { StatTemplatePagesStrapiContent } from '../data/interfaces/stat-template-page/StatTemplatePagesStrapiContent';

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
  ]);
  return fetchStrapiData('about-us-page', query);
}

export async function getOurWorkPageStrapiData(): Promise<OurWorkPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingImage.image',
    'quote',
    'metrics',
    'accordionSection.accordionItems',
    'accordionSection.accordionItems.linkIcon',
  ]);
  return fetchStrapiData('our-work-page', query);
}

export async function getGetInvolvedPageStrapiData(): Promise<GetInvolvedPageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingCard.image',
    'sections.image',
    'sections.link',
    'sections.linkIcon',
    'paymentSection.paymentOptions',
    'paymentSection.paymentOptionIcon',
  ]);
  return fetchStrapiData('get-involved-page', query);
}

export async function getDonatePageStrapiData(): Promise<DonatePageStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingCard.image',
    'metrics',
    'paymentSection.paymentOptions',
    'paymentSection.paymentOptionIcon',
  ]);
  return fetchStrapiData('donate-page', query);
}

export async function getOurWorkSubPagesStrapiData(): Promise<StatTemplatePagesStrapiContent> {
  const query = buildStrapiEndpointQuery([
    'landingImage.image',
    'quote',
    'metrics',
  ]);
  return fetchAllStrapiData(`our-work-sub-pages`, query);
}
