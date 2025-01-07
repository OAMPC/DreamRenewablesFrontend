import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import AboutUsPageFactory from '../../../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPageLandingCardMobile from './AboutUsPageLandingCardMobile';

describe('AboutUsPageLandingCardMobile', () => {
  const setup = async () => {
    const aboutUsPageFactory = new AboutUsPageFactory();
    const mockData = aboutUsPageFactory.getMockData();
    render(
      <MemoryRouter>
        <AboutUsPageLandingCardMobile landingImage={mockData.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the about us page mobile title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-landing-title-mobile')
        ).toBeInTheDocument();
      });
    });

    test('should render the about us page mobile image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-landing-image-mobile')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
