import { LandingCard } from '../landing-card/LandingCard';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
import { PaymentOption } from '../util/PaymentOption';
import { StandardLink } from '../util/StandardLink';

export interface GetInvolvedPageStrapiContent {
  landingCard: LandingCard;
  sections: Array<Section>;
  paymentSection: PaymentSection;
}

export interface Section {
  title: string;
  description: string;
  image: ImageStrapiContent;
  link: StandardLink;
  linkIcon: ImageStrapiContent;
}

export interface PaymentSection {
  title: string;
  subTitle: string;
  paymentOptions: Array<PaymentOption>;
  paymentOptionIcon: ImageStrapiContent;
}
