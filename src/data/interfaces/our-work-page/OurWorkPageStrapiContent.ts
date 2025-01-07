import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurWorkPageStrapiContent {
  landingImage: LandingImage;
  quote: Quote;
  metrics: Array<Metric>;
  accordionSection: AccordionSection;
}

export interface LandingImage {
  image: ImageStrapiContent;
  title: string;
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
