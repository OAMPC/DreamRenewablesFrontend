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
import JobPostsHomePage from './JobPostsHomePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';
import JobPostsFactory from '../../test/factories/strapi/JobPostsFactory';

describe('JobPostsHomePage', () => {
  const mockData = new JobPostsFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      error: null,
    });

    renderWithProviders(<JobPostsHomePage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Render elements', () => {
    test('should render the job posts grid', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getByTestId('job-posts-grid')).toBeInTheDocument();
      });
    });

    test('should render the correct number of job post cards', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('job-post-card')).toHaveLength(
          mockData.length
        );
      });
    });

    test('should render each job post card with correct data', async () => {
      setup();
      await waitFor(() => {
        mockData.forEach((post) => {
          expect(
            screen.getByTestId(
              `job-post-card-landing-image-${post.attributes.url}`
            )
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`job-post-card-title-${post.attributes.url}`)
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`job-post-card-summary-${post.attributes.url}`)
          ).toBeInTheDocument();
        });
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
