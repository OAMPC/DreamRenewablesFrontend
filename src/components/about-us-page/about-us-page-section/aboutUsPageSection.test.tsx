import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import AboutUsPageFactory from '../../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPageOurStorySection from './AboutUsPageSection';

describe('AboutUsPageOurStorySection', () => {
  const setup = async () => {
    const aboutUsPageFactory = new AboutUsPageFactory();
    const mockData = aboutUsPageFactory.getMockData();
    render(
      <MemoryRouter>
        <AboutUsPageOurStorySection
          sectionData={mockData.sections[0]}
          rowIndex={0}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render about us page section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render about us page section description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-section-description')
        ).toBeInTheDocument();
      });
    });

    test('should render about us page section link after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-section-link')
        ).toBeInTheDocument();
      });
    });

    test('should render about us page section image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-section-image')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
