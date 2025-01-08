import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageAccordion from './OurWorkPageAccordion';

describe('OurWorkPageAccordion', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurWorkPageAccordion
          accordionData={mockData.accordionSection.accordionItems}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render all the our-work page accordion items after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('our-work-page-accordion-item').length
        ).toBe(3);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
