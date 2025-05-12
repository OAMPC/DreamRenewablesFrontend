import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  vi,
  Mock,
} from 'vitest';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';
import FundraisingEventsFactory from '../../test/factories/strapi/FundraisingEventsFactory';
import FundraisingEventHomePage from './FundraisingEventHomePage';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

describe('FundraisingEventsHomePage', () => {
  const mockData = new FundraisingEventsFactory().getMockResponse().data;

  const setup = async () => {
    (useQuery as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      isPending: false,
      error: null,
    });

    renderWithProviders(<FundraisingEventHomePage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Render elements', () => {
    test('should render the fundraising events grid', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('fundraising-events-grid')
        ).toBeInTheDocument();
      });
    });

    test('should render the correct number of fundraising event cards', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('fundraising-event-card')).toHaveLength(
          mockData.length
        );
      });
    });

    test('should render each fundraising event card with correct data', async () => {
      await setup();
      await waitFor(() => {
        mockData.forEach((event) => {
          expect(
            screen.getByTestId(`event-card-image-${event.attributes.url}`)
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(`event-card-title-${event.attributes.url}`)
          ).toHaveTextContent(event.attributes.eventTitle);
          expect(
            screen.getByTestId(`event-card-date-${event.attributes.url}`)
          ).toHaveTextContent(event.attributes.eventDate);
          expect(
            screen.getByTestId(`event-card-contact-${event.attributes.url}`)
          ).toHaveTextContent(event.attributes.contactEmail);
        });
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
