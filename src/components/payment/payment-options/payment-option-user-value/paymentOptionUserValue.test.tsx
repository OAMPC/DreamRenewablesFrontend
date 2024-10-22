import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageFactory from '../../../../test/factories/strapi/LandingPageFactory';
import PaymentOptionUserValue from './PaymentOptionUserValue';

describe('PaymentOptionUserValue', () => {
  beforeEach(() => {
    const mockData = new LandingPageFactory().getMockData();
    render(
      <MemoryRouter>
        <PaymentOptionUserValue
          paymentOptionIcon={mockData.paymentSection.paymentOptionIcon}
        />
      </MemoryRouter>
    );
  });

  describe('render elements', async () => {
    test('should render an input field after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-user-input')
        ).toBeInTheDocument();
      });
    });

    test('should render button after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-user-input-button')
        ).toBeInTheDocument();
      });
    });

    test('should render description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-option-user-input-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
