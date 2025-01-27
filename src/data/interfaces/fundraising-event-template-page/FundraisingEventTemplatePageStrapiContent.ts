import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface FundraisingEventTemplatePageStrapiContent {
  url: string;
  eventTitle: string;
  eventDate: string;
  eventDescription: string;
  contactEmail: string;
  landingImage: ImageStrapiContent;
  signUpLink: string;
}
