import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, test, vi } from 'vitest';
import LandingPageImageCardMobile from './LandingPageCardMobile';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';

describe('landingPageImageCardMobile', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();

    render(
      <MemoryRouter>
        <LandingPageImageCardMobile landingCard={mockData.landingImageMobile} />
      </MemoryRouter>
    );
  };

  describe('render elements', async () => {
    test('should render the mobile landing card title after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-title')).toBeInTheDocument();
      });
    });

    test('should render the mobile landing card sub title after data is loaded', async () => {
      await setup();
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
