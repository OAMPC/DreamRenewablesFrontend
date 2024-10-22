import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../test/factories/strapi/LandingPageFactory';
import LandingPagePaymentSection from './LandingPagePaymentSection';

describe('landingPageVideoSection', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPagePaymentSection paymentSection={mockData.paymentSection} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render main title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-section-main-title')
        ).toBeInTheDocument();
      });
    });

    test('should render sub title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-section-main-title')
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
        ).toEqual(4);
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
