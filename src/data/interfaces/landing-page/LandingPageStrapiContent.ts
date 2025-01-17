import { PaymentSection } from '../payment/PaymentSection';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { StandardLink } from '../util/StandardLink';

export interface LandingPageStrapiContent {
  landingImageDesktop: LandingImage;
  landingImageMobile: LandingImage;
  videoSection: VideoSection;
  specialitySection: SpecialitySection;
  quoteSection: QuoteSection;
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

export interface QuoteSection {
  title: string;
  quoteIcon: ImageStrapiContent;
  quoteCarousel: Array<QuoteCarouselItem>;
}

export interface QuoteCarouselItem {
  quoteText: string;
  quoteAuthor: string;
  quoteAuthorRole: string;
}
