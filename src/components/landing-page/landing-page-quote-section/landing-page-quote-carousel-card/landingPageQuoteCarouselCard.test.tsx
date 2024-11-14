import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import LandingPageQuoteCarouselCard from './LandingPageQuoteCarouselCard';

describe('LandingPageQuoteCarouselCard', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageQuoteCarouselCard
          card={mockData.quoteSection.quoteCarousel[0]}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render quote text after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('quote-carousel-card-quote-text')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
