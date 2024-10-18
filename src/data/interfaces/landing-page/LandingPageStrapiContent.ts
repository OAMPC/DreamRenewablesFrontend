import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { PaymentOption } from '../util/PaymentOption';
import { StandardLink } from '../util/StandardLink';

export interface LandingPageStrapiContent {
  landingImageDesktop: LandingImage;
  landingImageMobile: LandingImage;
  videoSection: VideoSection;
  specialitySection: SpecialitySection;
  paymentSection: PaymentSection;
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

export interface PaymentSection {
  title: string;
  subTitle: string;
  paymentOptions: Array<PaymentOption>;
}
