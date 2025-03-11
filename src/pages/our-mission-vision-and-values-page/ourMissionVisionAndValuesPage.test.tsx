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
    test('should render the our mission and values page mission section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-mission-section')).toBeInTheDocument();
      });
    });

    test('should render the our mission and values page vision section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-vision-section')).toBeInTheDocument();
      });
    });

    test('should render the our mission and values page values section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-values-section')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
