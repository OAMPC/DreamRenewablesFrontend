import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import AboutUsPageFactory from '../../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPageImageButtonsSection from './aboutUsPageImageButtonsSection';

describe('AboutUsPageImageButtonsSection', () => {
  const setup = async () => {
    const aboutUsPageFactory = new AboutUsPageFactory();
    const mockData = aboutUsPageFactory.getMockData();
    render(
      <MemoryRouter>
        <AboutUsPageImageButtonsSection
          imageButtonSectionData={mockData.imageButtonSection}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render about us page image buttons section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-image-buttons-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render about us page image buttons after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getAllByTestId('about-us-page-image-button').length).toBe(
          2
        );
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
