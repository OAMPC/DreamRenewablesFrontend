import { LandingCard } from '../landing-card/LandingCard';
import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurMissionVisionAndValuesPageStrapiContent {
  landingCard: LandingCard;
  sections: Array<OurMissionVisionAndValuesPageSection>;
}

export interface OurMissionVisionAndValuesPageSection {
  title: string;
  titleIcon: ImageStrapiContent;
  sectionDescription: string;
}
