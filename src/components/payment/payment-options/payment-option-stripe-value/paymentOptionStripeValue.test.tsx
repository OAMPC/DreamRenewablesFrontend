import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import PaymentOptionStripeValue from './PaymentOptionStripeValue';

describe('PaymentOptionStripeValue', () => {
  beforeEach(() => {
    const mockData = new LandingPageFactory().getMockData();
    render(
      <MemoryRouter>
        <PaymentOptionStripeValue
          paymentOption={mockData.paymentSection.paymentOptions[0]}
          paymentOptionIcon={mockData.paymentSection.paymentOptionIcon}
          paymentType="monthly"
        />
      </MemoryRouter>
    );
  });

  describe('render elements', async () => {
    test('should render passed value after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-stripe-value')
        ).toBeInTheDocument();
      });
    });

    test('should render button after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-stripe-button')
        ).toBeInTheDocument();
      });
    });

    test('should render description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-stripe-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
