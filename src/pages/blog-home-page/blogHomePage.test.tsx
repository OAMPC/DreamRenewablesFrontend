import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import BlogHomePage from './BlogHomePage';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';
import navigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';

describe('BlogHomePage', () => {
  const mockBlogData = new BlogPostsFactory().getMockData();
  const navigationBarStrapiData = new navigationBarFactory().getMockData();
  const footerStrapiData = new FooterFactory().getMockData();

  const setup = () => {
    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationBarStrapiData,
          footerContent: footerStrapiData,
        }}
      >
        <MemoryRouter>
          <BlogHomePage blogPages={{ data: mockBlogData }} />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
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
          mockBlogData.length
        );
      });
    });

    test('should render each blog card with correct data', async () => {
      setup();
      await waitFor(() => {
        mockBlogData.forEach((post) => {
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
