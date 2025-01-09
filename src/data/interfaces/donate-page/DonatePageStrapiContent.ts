import { LandingCard } from '../landing-card/LandingCard';
import { PaymentSection } from '../payment/PaymentSection';

export interface DonatePageStrapiContent {
  landingCard: LandingCard;
  preMetricText: string;
  metrics: Array<Metric>;
  postMetricText: string;
  paymentSection: PaymentSection;
}

export interface Metric {
  value: string;
  valueDescription: string;
}
