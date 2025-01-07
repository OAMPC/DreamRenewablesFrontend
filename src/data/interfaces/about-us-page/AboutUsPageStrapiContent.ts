import { LandingCard } from '../landing-card/LandingCard';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface AboutUsPageStrapiContent {
  landingImage: LandingCard;
  sections: Array<Section>;
  imageButtonSection: ImageButtonSection;
}
export interface Section {
  title: string;
  description: string;
  image: ImageStrapiContent;
  link: StandardLink;
  linkIcon: ImageStrapiContent;
}

export interface ImageButtonSection {
  title: string;
  imageButtons: Array<ImageButton>;
}

export interface ImageButton {
  image: ImageStrapiContent;
  linkSlug: string;
  text: string;
  subText: string;
}
