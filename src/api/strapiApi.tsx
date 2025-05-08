import { NavigationBarStrapiContent } from '../data/interfaces/navigation-bar/NavigationBarStrapiContent';
import { FooterStrapiContent } from '../data/interfaces/footer/FooterStrapiContent';
import { LandingPageStrapiContent } from '../data/interfaces/landing-page/LandingPageStrapiContent';
import { OurMissionVisionAndValuesPageStrapiContent } from '../data/interfaces/our-mission-vision-and-values-page/OurMissionVisionAndValuesPageStrapiContent';
import { OurTeamPageStrapiContent } from '../data/interfaces/our-team-page/OurTeamPageStrapiContent';
import { buildStrapiPopulateQuery } from './util/buildStrapiPopulateQuery';
import { OurDonorsPageStrapiContent } from '../data/interfaces/our-donor-page/OurDonorsPageStrapiContent';
import { AboutUsPageStrapiContent } from '../data/interfaces/about-us-page/AboutUsPageStrapiContent';
import { OurWorkPageStrapiContent } from '../data/interfaces/our-work-page/OurWorkPageStrapiContent';
import { GetInvolvedPageStrapiContent } from '../data/interfaces/get-involved-page/GetInvolvedPageStrapiContent';
import { DonatePageStrapiContent } from '../data/interfaces/donate-page/DonatePageStrapiContent';
import { StatTemplatePagesStrapiContent } from '../data/interfaces/stat-template-page/StatTemplatePagesStrapiContent';
import { fetchStrapiData } from './util/fetchStrapiData';
import { BlogPostsTemplatePageStrapiContent } from '../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { FundraisingEventTemplatePagesStrapiContent } from '../data/interfaces/fundraising-event-template-page/FundraisingEventTemplatePagesStrapiConent';

export async function getNavigationBarStrapiData(): Promise<NavigationBarStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'brandImage',
    'standardLinks',
    'dropdownLinks.nestedLinks',
    'button',
  ]);

  return fetchStrapiData('navigation-bar', populateQuery);
}

export async function getFooterStrapiData(): Promise<FooterStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'image',
    'navigationLinks.standardLinks',
    'socialMediaLinks.iconLinks.icon',
    'contactInformation.icon',
  ]);

  return fetchStrapiData('footer', populateQuery);
}

export async function getLandingPageStrapiData(): Promise<LandingPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
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

  return fetchStrapiData('landing-page', populateQuery);
}

export async function getOurMissionVisionAndValuesPageStrapiData(): Promise<OurMissionVisionAndValuesPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'sections.titleIcon',
    'landingCard.image',
  ]);
  return fetchStrapiData('mission-vision-and-values-page', populateQuery);
}

export async function getOurTeamPageStrapiData(): Promise<OurTeamPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'departmentSections',
    'departmentSections.teamProfileDetails',
    'departmentSections.teamProfileDetails.profileImage',
  ]);

  return fetchStrapiData('our-team-page', populateQuery);
}

export async function getOurDonorsPageStrapiData(): Promise<OurDonorsPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'ourDonors',
    'ourDonors.logo',
  ]);
  return fetchStrapiData('our-donors-page', populateQuery);
}

export async function getAboutUsPageStrapiData(): Promise<AboutUsPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage.image',
    'sections.image',
    'sections.link',
    'sections.linkIcon',
    'imageButtonSection.imageButtons',
    'imageButtonSection.imageButtons.image',
  ]);
  return fetchStrapiData('about-us-page', populateQuery);
}

export async function getOurWorkPageStrapiData(): Promise<OurWorkPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage.image',
    'quote',
    'metrics',
    'accordionSection.accordionItems',
    'accordionSection.accordionItems.linkIcon',
  ]);
  return fetchStrapiData('our-work-page', populateQuery);
}

export async function getGetInvolvedPageStrapiData(): Promise<GetInvolvedPageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingCard.image',
    'sections.image',
    'sections.link',
    'sections.linkIcon',
    'paymentSection.paymentOptions',
    'paymentSection.paymentOptionIcon',
  ]);
  return fetchStrapiData('get-involved-page', populateQuery);
}

export async function getDonatePageStrapiData(): Promise<DonatePageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingCard.image',
    'metrics',
    'paymentSection.paymentOptions',
    'paymentSection.paymentOptionIcon',
  ]);
  return fetchStrapiData('donate-page', populateQuery);
}

export async function getOurWorkSubPageStrapiData(
  slug: string
): Promise<StatTemplatePagesStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage.image',
    'quote',
    'metrics',
  ]);

  const filter = `filters[url][$eq]=${slug}`;

  return fetchStrapiData('our-work-sub-pages', populateQuery, true, filter);
}

export async function getNewestToOldestBlogPostsStrapiData(): Promise<BlogPostsTemplatePageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage',
    'title',
    'blogPostSummary',
    'author',
    'publishedAt',
    'blogPostBody',
  ]);

  const filter = `sort[0]=publishedAt:desc`;

  return await fetchStrapiData(`blog-posts`, populateQuery, true, filter);
}

export async function getBlogPostStrapiData(
  slug: string
): Promise<BlogPostsTemplatePageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage',
    'title',
    'blogPostSummary',
    'author',
    'publishedAt',
    'blogPostBody',
  ]);

  const filter = `filters[url][$eq]=${slug}`;

  return fetchStrapiData(`blog-posts`, populateQuery, true, filter);
}

export async function getRecentBlogPosts(
  slug: string
): Promise<BlogPostsTemplatePageStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage',
    'title',
    'blogPostSummary',
    'author',
    'publishedAt',
    'blogPostBody',
  ]);

  const filter = `sort[0]=publishedAt:desc&pagination[limit]=4&filters[url][$ne]=${slug}`;

  return fetchStrapiData(`blog-posts`, populateQuery, true, filter);
}

export async function getLatestFundraisingEventsStrapiData(): Promise<FundraisingEventTemplatePagesStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage',
    'eventTitle',
    'eventDate',
    'eventDescription',
    'contactEmail',
    'url',
    'signUpInfo.title',
    'signUpInfo.signUpLink',
  ]);

  const filter = `sort[0]=eventDate:desc`;

  return fetchStrapiData(`fundraising-events`, populateQuery, true, filter);
}

export async function getFundraisingEventStrapiData(
  slug: string
): Promise<FundraisingEventTemplatePagesStrapiContent> {
  const populateQuery = buildStrapiPopulateQuery([
    'landingImage',
    'eventTitle',
    'eventDate',
    'eventDescription',
    'contactEmail',
    'url',
    'signUpInfo.title',
    'signUpInfo.signUpLink',
  ]);

  const filter = `filters[url][$eq]=${slug}`;

  return fetchStrapiData(`fundraising-events`, populateQuery, true, filter);
}
