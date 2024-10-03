import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface LandingPageStrapiContent {
  landingImageDesktop: LandingImage;
  landingImageMobile: LandingImage;
  videoSection: VideoSection;
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
