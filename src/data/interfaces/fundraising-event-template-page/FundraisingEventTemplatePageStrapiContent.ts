import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface FundraisingEventTemplatePageStrapiContent {
  url: string;
  eventTitle: string;
  eventDate: string;
  eventDescription: string;
  contactEmail: string;
  landingImage: ImageStrapiContent;
  signUpInfo: SignUpInfo;
}

export interface SignUpInfo {
  title: string;
  signUpLink: string;
}
