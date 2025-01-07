import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageLandingCardMobile from './OurWorkPageLandingCardMobile';

describe('OurWorkPageLandingCardMobile', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurWorkPageLandingCardMobile landingImage={mockData.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our work page mobile title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-landing-title-mobile')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work page mobile image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-landing-image-mobile')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
