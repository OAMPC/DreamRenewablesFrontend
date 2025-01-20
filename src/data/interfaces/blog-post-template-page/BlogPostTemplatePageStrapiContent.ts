import { ImageStrapiContent } from '../util/ImageStrapiContent';

export interface BlogPostTemplatePageStrapiContent {
  title: string;
  blogPostBody: string;
  publishedAt: string;
  blogPostSummary: string;
  author: string;
  landingImage: ImageStrapiContent;
}
