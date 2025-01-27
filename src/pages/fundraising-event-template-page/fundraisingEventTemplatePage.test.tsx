import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import navigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import BlogPostTemplatePage from './FundraisingEventTemplatePage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('BlogPostTemplatePage', () => {
  const mockData = new BlogPostsFactory().getMockData();
  const navigationBarStrapiData = new navigationBarFactory().getMockData();
  const footerStrapiData = new FooterFactory().getMockData();

  const setup = async () => {
    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationBarStrapiData,
          footerContent: footerStrapiData,
        }}
      >
        <MemoryRouter>
          <BlogPostTemplatePage strapiData={mockData[0].attributes} />
        </MemoryRouter>
      </SharedDataContext.Provider>
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
        expect(
          screen.getByText(mockData[0].attributes.blogPostSummary)
        ).toBeInTheDocument();
      });
    });

    test('should render the publication date and author information', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByText(mockData[0].attributes.publishedAt.split('T')[0])
        ).toBeInTheDocument();
        expect(
          screen.getByText(mockData[0].attributes.author)
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
