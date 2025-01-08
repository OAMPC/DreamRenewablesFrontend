import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageAccordionItem from './OurWorkPageAccordionItem';

describe('OurWorkPageAccordionItem', () => {
  const setup = async () => {
    const ourWorkPageFactory = new OurWorkPageFactory();
    const mockData = ourWorkPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurWorkPageAccordionItem
          accordionItemData={mockData.accordionSection.accordionItems[0]}
          accordionItemDataIndex={0}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render all the our-work page accordion item header after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-accordion-item-header')
        ).toBeInTheDocument();
      });
    });

    test('should render all the our-work page accordion item description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-page-accordion-item-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
