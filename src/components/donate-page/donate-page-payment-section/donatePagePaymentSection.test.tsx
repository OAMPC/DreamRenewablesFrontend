import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import DonatePagePaymentSection from './DonatePagePaymentSection';
import DonatePageFactory from '../../../test/factories/strapi/DonatePageFactory';

describe('DonatePagePaymentSection', () => {
  const setup = async () => {
    const donatePageFactory = new DonatePageFactory();
    const mockData = donatePageFactory.getMockData();
    render(
      <MemoryRouter>
        <DonatePagePaymentSection paymentStrapiData={mockData.paymentSection} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the donate page payment section main title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-payment-section-main-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the donate page payment section sub title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-payment-section-sub-title')
        ).toBeInTheDocument();
      });
    });

    test('should render payment toggle after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('payment-type-toggle')).toBeInTheDocument();
      });
    });

    test('should render multiple payment options after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('payment-option-stripe-value').length
        ).toEqual(3);
      });
    });

    test('should render user input payment option after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-user-value')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
