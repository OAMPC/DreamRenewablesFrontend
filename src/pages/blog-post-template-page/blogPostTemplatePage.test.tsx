import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from 'vitest';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import BlogPostTemplatePage from './BlogPostTemplatePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('BlogPostTemplatePage', () => {
  const mockData = new BlogPostsFactory().getMockData();
  const mockRecentPosts = { data: mockData.slice(1, 4) };

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockImplementation(({ queryKey }) => {
      if (queryKey[0] === 'RecentBlogPosts') {
        return {
          data: mockRecentPosts,
          isLoading: false,
          error: null,
        };
      }
      return {
        data: mockData,
        isLoading: false,
        error: null,
      };
    });

    renderWithProviders(
      <BlogPostTemplatePage strapiData={mockData[0].attributes} />
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render a blog page landing image when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-image')).toBeInTheDocument();
      });
    });

    test('should render the blog post title', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByText(mockData[0].attributes.title)
        ).toBeInTheDocument();
      });
    });

    test('should render the blog post summary', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('blog-post-summary')).toBeInTheDocument();
      });
    });

    test('should render the publication date and author information', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('blog-post-published-time')
        ).toBeInTheDocument();
        expect(screen.getByTestId('blog-post-author')).toBeInTheDocument();
      });
    });
  });

  test('should render the "Previous Posts" section', async () => {
    await setup();
    await waitFor(() => {
      expect(screen.getByText('Previous Posts')).toBeInTheDocument();
    });
  });

  test('should render a grid the blog grid in the "Previous Posts" section', async () => {
    await setup();
    await waitFor(() => {
      expect(screen.getByTestId('blog-grid')).toBeInTheDocument();
    });
  });

  test('should render a blog post in the blog grid in the "Previous Posts" section', async () => {
    await setup();
    await waitFor(() => {
      const blogCards = screen.getAllByTestId('previous-post-blog-card');
      expect(blogCards.length).toEqual(3);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
