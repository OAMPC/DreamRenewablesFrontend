import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageQuoteSection from './OurWorkPageQuoteSection';

describe('OurWorkPageQuoteSection', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurWorkPageQuoteSection quoteData={mockData.quote} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our work quote body after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-quote-body')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work quote author after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-quote-author')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
