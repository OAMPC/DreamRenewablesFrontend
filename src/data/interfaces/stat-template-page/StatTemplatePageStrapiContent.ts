import { LandingCard } from '../landing-card/LandingCard';
import { Metric } from '../metric/Metric';

export interface StatTemplatePageStrapiContent {
  url: string;
  landingImage: LandingCard;
  quote: Quote;
  metrics: Array<Metric>;
  freeText: string;
}

export interface Quote {
  body: string;
  author: string;
}
