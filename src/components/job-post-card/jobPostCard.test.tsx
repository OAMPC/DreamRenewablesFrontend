import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import JobPostCard from './JobPostCard';
import JobPostsFactory from '../../test/factories/strapi/JobPostsFactory';

const jobPostsFactory = new JobPostsFactory();
const mockJobPostData = jobPostsFactory.getMockResponse().data[0].attributes;

describe('JobPostCard', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <JobPostCard strapiData={mockJobPostData} />
      </MemoryRouter>
    );
  };

  describe('Rendering and Content', () => {
    test('should render the job post card container', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getByTestId('job-post-card')).toBeInTheDocument();
      });
    });

    test('should render the job post title', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`job-post-card-title-${mockJobPostData.url}`)
        ).toHaveTextContent(mockJobPostData.title);
      });
    });

    test('should render the job post summary', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`job-post-card-summary-${mockJobPostData.url}`)
        ).toHaveTextContent(mockJobPostData.summary.trim());
      });
    });

    test('should render the landing image with correct src', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(
            `job-post-card-landing-image-${mockJobPostData.url}`
          )
        ).toHaveAttribute(
          'src',
          mockJobPostData.landingImage.data.attributes.url
        );
      });
    });
  });

  describe('Linking and Navigation', () => {
    test('should link to the correct job post URL', async () => {
      setup();
      await waitFor(() => {
        const linkElement = screen.getByTestId(
          `job-post-card-link-${mockJobPostData.url}`
        ) as HTMLAnchorElement;
        expect(linkElement).toHaveAttribute(
          'href',
          `/job-post/${mockJobPostData.url}`
        );
      });
    });
  });
});
