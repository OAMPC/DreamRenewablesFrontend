import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface LandingPageStrapiContent {
  landingImage: LandingImage;
  videoSection: VideoSection;
}
interface LandingImage {
  image: ImageStrapiContent;
  title: string;
  subTitle: string;
}
interface VideoSection {
  title: string;
  subTitle: string;
  videoLink: string;
}
