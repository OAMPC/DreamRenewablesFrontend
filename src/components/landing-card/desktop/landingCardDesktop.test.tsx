import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';
import LandingCardDesktop from './LandingCardDesktop';

describe('LandingCardDesktop', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingCardDesktop landingCard={mockData.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the landing card desktop title after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-title-desktop')).toBeInTheDocument();
      });
    });

    test('should render the landing card desktop image after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-image-desktop')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
