import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface LandingPageStrapiContent {
  landingImageDesktop: LandingImage;
  landingImageMobile: LandingImage;
  videoSection: VideoSection;
  specialitySection: SpecialitySection;
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

export interface SpecialitySection {
  title: string;
  specialityCarousel: Array<SpecialtyCarouselItem>;
}
export interface SpecialtyCarouselItem {
  image: ImageStrapiContent;
  title: string;
  description: string;
  link: StandardLink;
  linkIcon: ImageStrapiContent;
}
