import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import PaymentTypeToggle from './PaymentTypeToggle';

describe('PaymentOptionUserValue', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PaymentTypeToggle />
      </MemoryRouter>
    );
  });

  describe('render elements', async () => {
    test('should render a button group', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('payment-type-button-group')
        ).toBeInTheDocument();
      });
    });

    test('should render two buttons for different payment types', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('payment-type-monthly')).toBeInTheDocument();
        expect(screen.getByTestId('payment-type-one-time')).toBeInTheDocument();
      });
    });
  });

  describe('button interactions', () => {
    test('should toggle payment type when a button is clicked', async () => {
      const monthlyPaymentButton = await screen.getByTestId(
        'payment-type-monthly'
      );
      const oneTimePaymentButton = await screen.getByTestId(
        'payment-type-one-time'
      );

      expect(monthlyPaymentButton).toHaveClass('active');
      expect(oneTimePaymentButton).not.toHaveClass('active');

      fireEvent.click(oneTimePaymentButton);

      await waitFor(() => {
        expect(monthlyPaymentButton).not.toHaveClass('active');
        expect(oneTimePaymentButton).toHaveClass('active');
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
