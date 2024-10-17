import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface LandingPageStrapiContent {
  landingImageDesktop: LandingImage;
  landingImageMobile: LandingImage;
  videoSection: VideoSection;
  specialityCarousel: Array<SpecialtyCarouselItem>;
}
export interface LandingImage {
  image: ImageStrapiContent;
  title: string;
  subTitle: string;
}
export interface VideoSection {
  title: string;
  subTitle: string;
  videoLink: string;
}

export interface SpecialtyCarouselItem {
  specialityImage: ImageStrapiContent;
  specialityTitle: string;
  specialityDescription: string;
  link: StandardLink;
}
