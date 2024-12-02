import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurDonorsPageStrapiContent {
  pageTitle: string;
  pageSubTitle: string;
  ourDonors: Array<OurDonor>;
}

export interface OurDonor {
  name: string;
  description: string;
  logo: ImageStrapiContent;
}
