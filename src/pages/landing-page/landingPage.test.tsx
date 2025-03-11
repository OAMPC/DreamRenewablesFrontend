import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from 'vitest';
import LandingPage from './LandingPage';
import LandingPageFactory from '../../test/factories/strapi/LandingPageFactory';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('LandingPage', () => {
  const mockData = new LandingPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<LandingPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render desktop landing image card when screen width is large', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-page-card-desktop')
        ).toBeInTheDocument();
      });
    });

    test('should render video section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-video-section')).toBeInTheDocument();
      });
    });

    test('should render speciality section', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-speciality-section')
        ).toBeInTheDocument();
      });
    });

    test('should render quote section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-quote-section')).toBeInTheDocument();
      });
    });

    test('should render payment section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('payment-section')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
