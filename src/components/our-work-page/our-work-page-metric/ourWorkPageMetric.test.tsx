import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageMetric from './OurWorkPageMetric';

describe('OurWorkPageMetric', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurWorkPageMetric metricData={mockData.metrics[0]} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our-work metric value after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-metric-value')
        ).toBeInTheDocument();
      });
    });

    test('should render the our-work metric description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-metric-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
