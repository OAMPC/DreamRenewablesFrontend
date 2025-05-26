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
import JobPostsFactory from '../../test/factories/strapi/JobPostsFactory';
import JobPostTemplatePage from './JobPostTemplatePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('JobPostTemplatePage', () => {
  const mockData = new JobPostsFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockImplementation(({ queryKey }) => {
      if (queryKey[0] === 'RecentJobPosts') {
        return {
          data: { data: mockData.slice(1, 4) },
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
      <JobPostTemplatePage strapiData={mockData[0].attributes} />
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the landing image', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-image')).toBeInTheDocument();
      });
    });

    test('should render the job post title', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('job-post-title')).toHaveTextContent(
          mockData[0].attributes.title
        );
      });
    });

    test('should render the sign-up button if signUpLink exists', async () => {
      await setup();
      await waitFor(() => {
        const signUpButtons = screen.getAllByTestId('job-post-sign-up-button');
        expect(signUpButtons).toHaveLength(2);
        signUpButtons.forEach((button) => {
          expect(button).toHaveAttribute(
            'href',
            mockData[0].attributes.signUpLink
          );
        });
      });
    });

    test('should render the contact email', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('job-post-contact-email')).toHaveTextContent(
          mockData[0].attributes.contactEmail
        );
      });
    });
  });

  test('should render the contact us button', async () => {
    await setup();
    await waitFor(() => {
      const contactUsButtons = screen.getAllByTestId(
        'job-post-contact-us-button'
      );
      expect(contactUsButtons).toHaveLength(2);
      contactUsButtons.forEach((button) =>
        expect(button).toHaveAttribute('href', '/contact')
      );
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
