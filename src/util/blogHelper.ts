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
  blogPost: BlogPostsTemplatePageStrapiContent,
  toRemoveBlogPost: BlogPostTemplatePageStrapiContent
) => {
  {
    const urlToRemove = toRemoveBlogPost.url;
    const remainingBlogPosts = blogPost.data.filter((blogPost) => {
      return blogPost.attributes.url !== urlToRemove;
    });

    return { data: remainingBlogPosts };
  }
};

export const getMostRecentPosts = (
  sortedBlogPosts: BlogPostsTemplatePageStrapiContent,
  blogPost: BlogPostTemplatePageStrapiContent,
  currentIndex: number
) => {
  const firstThreePosts = [0, 1, 2];
  const isRecentPost = firstThreePosts.includes(currentIndex);

  const mostRecentBlogPosts = isRecentPost
    ? removeBlogPostFromArray(sortedBlogPosts, blogPost)
    : sortedBlogPosts;

  return mostRecentBlogPosts.data.slice(0, 3);
};
