import { LandingCard } from '../landing-card/LandingCard';
import { PaymentSection } from '../payment/PaymentSection';
import { ImageStrapiContent } from '../util/ImageStrapiContent';
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
