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
import OurTeamPageFactory from '../../test/factories/strapi/OurTeamPageFactory';
import OurTeamPage from './OurTeamPage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('OurTeamPage', () => {
  const mockData = new OurTeamPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<OurTeamPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our team page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-team-page-title')).toBeInTheDocument();
      });
    });

    test('should render the our team page sub title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-team-page-sub-title')
        ).toBeInTheDocument();
      });
    });

    test('should render each department section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('department-section').length).toBe(2);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
