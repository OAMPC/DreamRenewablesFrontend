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
import StatTemplatePageFactory from '../../test/factories/strapi/StatTemplatePageFactory';
import StatTemplatePage from './StatTemplatePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('StatTemplatePage', () => {
  const mockData = new StatTemplatePageFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      error: null,
    });

    renderWithProviders(<StatTemplatePage strapiData={mockData} />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the stat template page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-title-desktop')).toBeInTheDocument();
      });
    });

    test('should render the stat template page quote section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-quote-section')
        ).toBeInTheDocument();
      });
    });

    test('should render the stat template metrics when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('metric').length).toBe(2);
      });
    });

    test('should render the stat template free text when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-free-text')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
