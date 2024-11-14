import { render, screen, waitFor } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import LandingPageSpecialityCarousel from './LandingPageSpecialityCarousel';

vi.mock('react-multi-carousel', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => <>{children}</>, // Renders children directly without carousel
  };
});

describe('LandingPageSpecialityCarouselCard', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageSpecialityCarousel
          specialitySection={mockData.specialitySection}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the correct number of speciality carousel cards after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('landing-page-speciality-carousel-card').length
        ).toBe(2);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
