import { LandingCard } from '../landing-card/LandingCard';

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

export interface Metric {
  value: string;
  valueDescription: string;
}
