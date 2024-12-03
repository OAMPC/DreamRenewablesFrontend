import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface AboutUsPageStrapiContent {
  landingImage: LandingImage;
  sections: Array<Section>;
}

export interface LandingImage {
  title: string;
  image: ImageStrapiContent;
}

export interface Section {
  title: string;
  description: string;
  image: ImageStrapiContent;
  link: StandardLink;
  linkIcon: ImageStrapiContent;
}
