import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import StatTemplatePageMetric from './statTemplatePageMetric';
import StatTemplatePageFactory from '../../../test/factories/strapi/StatTemplatePageFactory';

describe('StatTemplatePageMetric', () => {
  const setup = async () => {
    const statTemplatePageFactory = new StatTemplatePageFactory();
    const mockData = statTemplatePageFactory.getMockData();
    render(
      <MemoryRouter>
        <StatTemplatePageMetric metricData={mockData.metrics[0]} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the stat-template metric value after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-metric-value')
        ).toBeInTheDocument();
      });
    });

    test('should render the stat-template metric description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-metric-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
