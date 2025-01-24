import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import BlogPostsFactory from '../../test/factories/strapi/BlogPostsFactory';
import Markdown from './Markdown';

describe('Markdown', () => {
  const mockData = new BlogPostsFactory().getMockData();
  const setup = async () => {
    render(
      <MemoryRouter>
        <Markdown rawMarkdown={mockData[0].attributes.blogPostBody} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the passed raw markdown after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('markdown-component')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
