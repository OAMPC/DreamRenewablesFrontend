import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurDonorsPageDonor from './ourDonorsPageDonor';
import OurDonorPageFactory from '../../test/factories/strapi/OurDonorPageFactory';

describe('OurDonorsPageDonor', () => {
  const setup = async () => {
    const ourDonorsPageFactory = new OurDonorPageFactory();
    const mockData = ourDonorsPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurDonorsPageDonor ourDonor={mockData.ourDonors[0]} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the donor logo after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-donor-page-donor-logo')
        ).toBeInTheDocument();
      });
    });

    test('should render the donor name after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-donor-page-donor-name')
        ).toBeInTheDocument();
      });
    });

    test('should render the donor description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-donor-page-donor-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
