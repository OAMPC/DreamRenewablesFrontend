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
import OurWorkPageFactory from '../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPage from './OurWorkPage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('OurWorkPage', () => {
  const mockData = new OurWorkPageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    renderWithProviders(<OurWorkPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our work page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-title-desktop')).toBeInTheDocument();
      });
    });

    test('should render the our work page quote section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-quote-section')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work metrics when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('metric').length).toBe(4);
      });
    });

    test('should render the our work accordion title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-accordion-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work accordion description when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-accordion-description')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work accordion when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-accordion')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
