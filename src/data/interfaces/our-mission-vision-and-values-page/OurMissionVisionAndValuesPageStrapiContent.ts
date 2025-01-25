import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface OurMissionVisionAndValuesPageStrapiContent {
  pageTitle: string;
  pageSubTitle: string;
  ourMissionSection: OurMissionSection;
  ourVisionSection: OurVisionSection;
  ourValuesSection: OurValuesSection;
}

export interface OurMissionSection {
  title: string;
  titleIcon: ImageStrapiContent;
  sectionImage: ImageStrapiContent;
  sectionDescription: string;
}

export interface OurVisionSection {
  title: string;
  titleIcon: ImageStrapiContent;
  sectionImage: ImageStrapiContent;
  sectionDescription: string;
}

export interface OurValuesSection {
  title: string;
  titleIcon: ImageStrapiContent;
  ourValuesEntries: string;
}

export interface ValueEntry {
  valueEntry: string;
}
