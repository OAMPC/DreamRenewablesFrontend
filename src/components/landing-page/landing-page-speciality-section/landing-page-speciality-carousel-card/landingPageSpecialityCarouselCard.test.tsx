import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import LandingPageSpecialityCarouselCard from './LandingPageSpecialityCarouselCard';

describe('LandingPageSpecialityCarouselCard', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageSpecialityCarouselCard
          card={mockData.specialitySection.specialityCarousel[0]}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render description title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('speciality-carousel-card-description-title')
        ).toBeInTheDocument();
      });
    });

    test('should render description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('speciality-carousel-card-description')
        ).toBeInTheDocument();
      });
    });

    test('should render a link in the description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('speciality-carousel-card-description-link')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
