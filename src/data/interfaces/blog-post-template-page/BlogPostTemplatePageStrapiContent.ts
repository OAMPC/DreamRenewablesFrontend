import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface BlogPostTemplatePageStrapiContent {
  url: string;
  title: string;
  blogPostBody: string;
  publishedAt: string;
  blogPostSummary: string;
  author: string;
  landingImage: ImageStrapiContent;
}
