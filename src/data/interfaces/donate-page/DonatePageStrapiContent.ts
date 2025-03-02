import { LandingCard } from '../landing-card/LandingCard';
import { Metric } from '../metric/Metric';
import { PaymentSection } from '../payment/PaymentSection';

export interface DonatePageStrapiContent {
  landingCard: LandingCard;
  preMetricText: string;
  metrics: Array<Metric>;
  postMetricText: string;
  paymentSection: PaymentSection;
}
