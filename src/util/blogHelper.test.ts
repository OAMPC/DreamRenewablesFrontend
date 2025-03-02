import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  getMostRecentPosts,
  isBlogPostInFirstThreePosts,
  sortBlogPostsNewestToOldest,
} from './blogHelper';
import BlogPostsFactory from '../test/factories/strapi/BlogPostsFactory.ts';
import { removeBlogPostFromArray } from '../util/blogHelper.ts';

describe('Blog Posts Utility Functions', () => {
  const mockBlogData = { data: new BlogPostsFactory().getMockData() };

  const sortedPosts = sortBlogPostsNewestToOldest(mockBlogData);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('sortBlogPostsNewestToOldest', () => {
    test('should sort blog posts from newest to oldest', () => {
      expect(sortedPosts[0].attributes.publishedAt).toBe(
        '2025-03-01T12:00:00Z'
      );
      expect(sortedPosts[1].attributes.publishedAt).toBe(
        '2025-02-15T12:00:00Z'
      );
      expect(sortedPosts[2].attributes.publishedAt).toBe(
        '2025-02-01T12:00:00Z'
      );
      expect(sortedPosts[3].attributes.publishedAt).toBe(
        '2025-01-01T12:00:00Z'
      );
    });
  });

  describe('removeBlogPostFromArray', () => {
    test('should remove the specified blog post', () => {
      const updatedBlogPosts = removeBlogPostFromArray(
        mockBlogData,
        sortedPosts[0].attributes
      );

      expect(updatedBlogPosts.data.length).toBe(3);
      expect(
        updatedBlogPosts.data.some(
          (post) => post.attributes.url === sortedPosts[0].attributes.url
        )
      ).toBe(false);
    });
  });

  describe('isBlogPostInFirstThreePosts', () => {
    test('should return true if the blog post is in the first three posts', () => {
      const isInFirstThree = isBlogPostInFirstThreePosts(
        mockBlogData,
        sortedPosts[0].attributes
      );

      expect(isInFirstThree).toBe(true);
    });

    test('should return false if the blog post is not in the first three posts', () => {
      const isInFirstThree = isBlogPostInFirstThreePosts(
        mockBlogData,
        sortedPosts[3].attributes
      );

      expect(isInFirstThree).toBe(false);
    });
  });

  describe('getMostRecentPosts', () => {
    test('should return the first 3 posts when the blog post is not in the first three', () => {
      const mostRecentPosts = getMostRecentPosts(
        mockBlogData,
        sortedPosts[0].attributes
      );

      expect(mostRecentPosts.length).toBe(3);
      expect(mostRecentPosts[0].attributes.url).toBe(
        sortedPosts[1].attributes.url
      );
    });

    test('should return the first 3 posts excluding the specified post if it is in the first three', () => {
      const mostRecentPosts = getMostRecentPosts(
        mockBlogData,
        sortedPosts[0].attributes
      );

      expect(mostRecentPosts.length).toBe(3);
      expect(
        mostRecentPosts.some(
          (post) => post.attributes.url === sortedPosts[0].attributes.url
        )
      ).toBe(false);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
