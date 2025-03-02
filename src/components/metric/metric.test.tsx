import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import Metric from './Metric';
import StatTemplatePageFactory from '../../test/factories/strapi/StatTemplatePageFactory';

describe('Metric', () => {
  const setup = async () => {
    const statTemplatePageFactory = new StatTemplatePageFactory();
    const mockData = statTemplatePageFactory.getMockData();
    render(
      <MemoryRouter>
        <Metric metricData={mockData.metrics[0]} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the metric value after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('metric-value')).toBeInTheDocument();
      });
    });

    test('should render the metric description after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('metric-description')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
