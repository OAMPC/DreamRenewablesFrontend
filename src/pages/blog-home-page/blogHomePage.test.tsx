import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  vi,
  Mock,
} from 'vitest';
import BlogHomePage from './BlogHomePage';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('BlogHomePage', () => {
  const mockData = new BlogPostsFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      error: null,
    });

    renderWithProviders(<BlogHomePage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Render elements', () => {
    test('should render the blog grid', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getByTestId('blog-grid')).toBeInTheDocument();
      });
    });

    test('should render the correct number of blog cards', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('blog-card')).toHaveLength(
          mockData.length
        );
      });
    });

    test('should render each blog card with correct data', async () => {
      setup();
      await waitFor(() => {
        mockData.forEach((post) => {
          expect(
            screen.getByTestId(`blog-card-landing-image-${post.attributes.url}`)
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`blog-card-title-${post.attributes.url}`)
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`blog-card-summary-${post.attributes.url}`)
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(
              `blog-card-published-time-${post.attributes.url}`
            )
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`blog-card-author-${post.attributes.url}`)
          ).toBeInTheDocument();
        });
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
