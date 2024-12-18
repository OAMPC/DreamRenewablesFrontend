import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, Mock, test, vi } from 'vitest';
import LandingPageImageCardMobile from './LandingPageCardMobile';
import useWindowDimensions from '../../../../hooks/windowDimensions';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';

vi.mock('../../../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('landingPageImageCardMobile', () => {
  const setup = async (windowWidth: number = 1024) => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    (useWindowDimensions as Mock).mockReturnValue({ width: windowWidth });
    render(
      <MemoryRouter>
        <LandingPageImageCardMobile
          landingImage={mockData.landingImageMobile}
        />
      </MemoryRouter>
    );
  };

  describe('render elements', async () => {
    test('should render landing image card mobile after data is loaded', async () => {
      await setup(992);
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-image-card-mobile')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
