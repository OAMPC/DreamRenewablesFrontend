export interface ImageStrapiContent {
  data: ImageStrapiData;
}

export interface ImageStrapiContents {
  data: Array<ImageStrapiData>;
}

interface ImageStrapiData {
  attributes: ImageStrapiAttributes;
}

export interface ImageStrapiAttributes {
  caption?: string;
  alternativeText: string;
  url: string;
}
