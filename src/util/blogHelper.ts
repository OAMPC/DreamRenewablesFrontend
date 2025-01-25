import { BlogPostsTemplatePageStrapiContent } from '../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { BlogPostTemplatePageStrapiContent } from '../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';

export const sortBlogPostsNewestToOldest = (
  blogPages: BlogPostsTemplatePageStrapiContent
) => {
  return blogPages.data.sort((a, b) => {
    const dateA = new Date(a.attributes.publishedAt);
    const dateB = new Date(b.attributes.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
};

export const removeBlogPost = (
  blogPages: BlogPostsTemplatePageStrapiContent,
  toRemoveBlogPage: BlogPostTemplatePageStrapiContent
) =>
  blogPages.data.filter(
    (blogPost) => blogPost.attributes.url !== toRemoveBlogPage.url
  );
