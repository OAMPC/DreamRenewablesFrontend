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
import OurDonorPageFactory from '../../test/factories/strapi/OurDonorPageFactory';
import OurDonorsPage from './OurDonorsPage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('OurDonorsPage', () => {
  const mockData = new OurDonorPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<OurDonorsPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our donors page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-donors-page-title')).toBeInTheDocument();
      });
    });

    test('should render the our donors page sub title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-donors-page-sub-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the our donors page components when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('our-donor-page-donor').length).toBe(5);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
