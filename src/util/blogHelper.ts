import { BlogPostsTemplatePageStrapiContent } from '../data/interfaces/blog-post-template-page/BlogPostTemplatePagesStrapiContent';
import { BlogPostTemplatePageStrapiContent } from '../data/interfaces/blog-post-template-page/BlogPostTemplatePageStrapiContent';

export const sortBlogPostsNewestToOldest = (
  blogPost: BlogPostsTemplatePageStrapiContent
) => {
  return blogPost.data.sort((a, b) => {
    const dateA = new Date(a.attributes.publishedAt);
    const dateB = new Date(b.attributes.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });
};

const removeBlogPostFromArray = (
  blogPosts: BlogPostsTemplatePageStrapiContent,
  blogPostForRemoval: BlogPostTemplatePageStrapiContent
) => {
  {
    return {
      data: blogPosts.data.filter((blogPost) => {
        return blogPost.attributes.url !== blogPostForRemoval.url;
      }),
    };
  }
};

const isBlogPostInFirstThreePosts = (
  sortedBlogPosts: BlogPostsTemplatePageStrapiContent,
  blogPost: BlogPostTemplatePageStrapiContent
) => {
  const firstThreePosts = sortedBlogPosts.data.slice(0, 3);

  return firstThreePosts.some((post) => post.attributes.url === blogPost.url);
};

export const getMostRecentPosts = (
  sortedBlogPosts: BlogPostsTemplatePageStrapiContent,
  blogPost: BlogPostTemplatePageStrapiContent
) => {
  if (!isBlogPostInFirstThreePosts(sortedBlogPosts, blogPost)) {
    return sortedBlogPosts.data.slice(0, 3);
  }
  return removeBlogPostFromArray(sortedBlogPosts, blogPost).data.slice(0, 3);
};
