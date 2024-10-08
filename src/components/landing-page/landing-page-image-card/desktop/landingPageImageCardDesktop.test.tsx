import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageImageCardDesktop from './LandingPageImageCardDesktop';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('landingPageImageCardDesktop', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageImageCardDesktop
          landingImage={mockData.landingImageDesktop}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render landing image card desktop after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-image-card-desktop')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
