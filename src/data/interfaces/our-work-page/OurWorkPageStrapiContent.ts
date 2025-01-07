import { LandingCard } from '../landing-card/LandingCard';
import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurWorkPageStrapiContent {
  landingImage: LandingCard;
  quote: Quote;
  metrics: Array<Metric>;
  accordionSection: AccordionSection;
}

export interface Quote {
  body: string;
  author: string;
}

export interface Metric {
  value: string;
  valueDescription: string;
}

export interface AccordionSection {
  title: string;
  description: string;
  accordionItems: Array<AccordionItem>;
}

export interface AccordionItem {
  title: string;
  description: string;
  linkString: string;
  linkSlug: string;
  linkIcon: ImageStrapiContent;
}
