import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import AboutUsPageFactory from '../../../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPageLandingCardDesktop from './AboutUsPageLandingCardDesktop';

describe('AboutUsPageLandingCardDesktop', () => {
  const ABOUT_US_PAGE_FACTORY = new AboutUsPageFactory();
  const MOCK_DATA = ABOUT_US_PAGE_FACTORY.getMockData();
  const setup = async () => {
    render(
      <MemoryRouter>
        <AboutUsPageLandingCardDesktop landingImage={MOCK_DATA.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the about us page desktop title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-landing-title-desktop')
        ).toBeInTheDocument();
      });
    });

    test('should render the about us page desktop image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-landing-image-desktop')
        ).toHaveStyle(
          `background-image: url(${MOCK_DATA.landingImage.image.data.attributes.url})`
        );
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
