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
import FundraisingEventsFactory from '../../test/factories/strapi/FundraisingEventsFactory';
import FundraisingEventTemplatePage from './FundraisingEventTemplatePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';

describe('FundraisingEventTemplatePage', () => {
  const mockData = new FundraisingEventsFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      error: null,
    });

    renderWithProviders(
      <FundraisingEventTemplatePage strapiData={mockData[0].attributes} />
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render a fundraising event landing image when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-image')).toBeInTheDocument();
      });
    });

    test('should render the fundraising event title', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByText(mockData[0].attributes.eventTitle)
        ).toBeInTheDocument();
      });
    });

    test('should render the fundraising event description', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('event-description')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
