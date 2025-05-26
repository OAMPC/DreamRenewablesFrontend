import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface JobPostTemplatePageStrapiContent {
  url: string;
  title: string;
  description: string;
  summary: string;
  signUpLink: string;
  contactEmail: string;
  isVolunteeringOpportunity: boolean;
  landingImage: ImageStrapiContent;
}
