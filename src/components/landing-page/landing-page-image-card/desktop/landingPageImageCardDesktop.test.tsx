import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageImageCardDesktop from './LandingPageImageCardDesktop';
import landingPageFactory from '../../../../test/factories/strapi/landingPageFactory';

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('landingPageImageCardDesktop', () => {
  const setup = async () => {
    const { mockData } = landingPageFactory();
    render(
      <MemoryRouter>
        <LandingPageImageCardDesktop
          landingImage={mockData.data.attributes.landingImageDesktop}
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
