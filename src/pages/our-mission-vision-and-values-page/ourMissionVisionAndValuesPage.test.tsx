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
import OurMissionVisionAndValuesPageFactory from '../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurMissionVisionAndValuesPage from './OurMissionVisionAndValuesPage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('OurMissionVisionAndValuesPage', () => {
  const mockData = new OurMissionVisionAndValuesPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<OurMissionVisionAndValuesPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the about us landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-desktop')).toBeInTheDocument();
      });
    });

    test('should render the our mission and values page sections when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('omvvp-section').length).toBe(3);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
