import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import LandingPageCardDesktop from './LandingPageCardDesktop';

describe('landingPageCardDesktop', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageCardDesktop landingImage={mockData.landingImageDesktop} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the landing card title after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-title')).toBeInTheDocument();
      });
    });

    test('should render the landing card sub title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-card-sub-title')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
