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
import DonatePageFactory from '../../test/factories/strapi/DonatePageFactory';
import DonatePage from './DonatePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('DonatePage', () => {
  const mockData = new DonatePageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<DonatePage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the donate page landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-desktop')).toBeInTheDocument();
      });
    });

    test('should render the donate page pre metric text when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-pre-metric-text')
        ).toBeInTheDocument();
      });
    });

    test('should render the donate page metrics when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('metric').length).toBe(2);
      });
    });

    test('should render the donate page post metric text when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-post-metric-text')
        ).toBeInTheDocument();
      });
    });

    test('should render the donate page payment section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-payment-section')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
