import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import BlogCard from './SignUpCard';

const blogPostsFactory = new BlogPostsFactory();
const mockBlogData = blogPostsFactory.getMockResponse().data[0].attributes;

describe('BlogCard', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <BlogCard strapiData={mockBlogData} />
      </MemoryRouter>
    );
  };

  describe('Rendering and Content', () => {
    test('should render the blog card container', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getByTestId('blog-card')).toBeInTheDocument();
      });
    });

    test('should render the blog title', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`blog-card-title-${mockBlogData.url}`)
        ).toHaveTextContent(mockBlogData.title);
      });
    });

    test('should render the blog summary', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`blog-card-summary-${mockBlogData.url}`)
        ).toHaveTextContent(mockBlogData.blogPostSummary);
      });
    });

    test('should render the blog published date', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`blog-card-published-time-${mockBlogData.url}`)
        ).toHaveTextContent(mockBlogData.publishedAt.split('T')[0]);
      });
    });

    test('should render the blog author', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`blog-card-author-${mockBlogData.url}`)
        ).toHaveTextContent(mockBlogData.author);
      });
    });

    test('should render the landing image with correct src', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`blog-card-landing-image-${mockBlogData.url}`)
        ).toHaveAttribute('src', mockBlogData.landingImage.data.attributes.url);
      });
    });
  });

  describe('Linking and Navigation', () => {
    test('should link to the correct blog post URL', async () => {
      setup();
      const linkElement = screen.getByTestId(
        'blog-card-link'
      ) as HTMLAnchorElement;
      expect(linkElement).toHaveAttribute('href', `/blog/${mockBlogData.url}`);
    });
  });
});
