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
import FundraisingPage from './FundraisingPage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';
import FundraisingPageFactory from '../../test/factories/strapi/FundraisingPageFactory';

describe('FundraisingPage', () => {
  const mockData = new FundraisingPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<FundraisingPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the get involved landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-desktop')).toBeInTheDocument();
      });
    });

    test('should render the get involved page sections when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getAllByTestId('get-involved-page-section-title').length
        ).toBe(4);
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
