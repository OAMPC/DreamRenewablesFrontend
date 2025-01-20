import blogPostsStrapiResponse from '../../../../fixtures/blogPostsStrapiResponse.json';
import { BlogPostTemplatePageStrapiContent } from '../../../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';
import BaseCollectionFactory from '../BaseCollectionFactory';

class BlogPostsFactory extends BaseCollectionFactory<BlogPostTemplatePageStrapiContent> {
  constructor() {
    super(
      blogPostsStrapiResponse,
      `${import.meta.env.VITE_BASE_URL}/api/blog-posts?populate[0]=landingImage&populate[1]=title&populate[2]=blogPostSummary&populate[3]=author&populate[4]=publishedAt&populate[5]=blogPostBody`
    );
  }
}

export default BlogPostsFactory;
