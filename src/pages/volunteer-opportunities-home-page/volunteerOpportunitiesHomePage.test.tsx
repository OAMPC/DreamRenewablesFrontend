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
import VolunteerOpportunitiesHomePage from './VolunteeringOpportunitiesHomePage';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';
import VolunteerOpportunitiesFactory from '../../test/factories/strapi/VolunteeringOpportunitiesFactory';

describe('VolunteerOpportunitiesHomePage', () => {
  const mockData = new VolunteerOpportunitiesFactory().getMockData();

  const setup = async () => {
    (vi.mocked(useQuery) as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      error: null,
    });

    renderWithProviders(<VolunteerOpportunitiesHomePage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Render elements', () => {
    test('should render the volunteer opportunities grid', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('volunteer-opportunities-grid')
        ).toBeInTheDocument();
      });
    });

    test('should render the correct number of volunteer opportunity cards', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('job-post-card')).toHaveLength(
          mockData.length
        );
      });
    });

    test('should render each volunteer opportunity card with correct data', async () => {
      await setup();
      await waitFor(() => {
        mockData.forEach((opportunity) => {
          expect(
            screen.getByTestId(
              `job-post-card-landing-image-${opportunity.attributes.url}`
            )
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(
              `job-post-card-title-${opportunity.attributes.url}`
            )
          ).toBeInTheDocument();
          expect(
            screen.getByTestId(
              `job-post-card-summary-${opportunity.attributes.url}`
            )
          ).toBeInTheDocument();
        });
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
