import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingCardMobile from './landingCardMobile';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';

describe('LandingCardMobile', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingCardMobile landingCard={mockData.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the landing card mobile title after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-title-mobile')).toBeInTheDocument();
      });
    });

    test('should render the landing card mobile image after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-image-mobile')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
