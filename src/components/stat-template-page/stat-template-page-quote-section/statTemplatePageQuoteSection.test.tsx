import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import StatTemplatePageQuoteSection from './statTemplatePageQuoteSection';
import StatTemplatePageFactory from '../../../test/factories/strapi/StatTemplatePageFactory';

describe('StatTemplatePageQuoteSection', () => {
  const setup = async () => {
    const statTemplatePageFactory = new StatTemplatePageFactory();
    const mockData = statTemplatePageFactory.getMockData();
    render(
      <MemoryRouter>
        <StatTemplatePageQuoteSection quoteData={mockData.quote} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the stat template quote body after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-quote-body')
        ).toBeInTheDocument();
      });
    });

    test('should render the stat template quote author after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('stat-template-page-quote-author')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
