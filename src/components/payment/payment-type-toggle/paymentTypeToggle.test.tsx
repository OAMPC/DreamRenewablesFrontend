import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import PaymentTypeToggle from './PaymentTypeToggle';
import { PaymentType } from '../../../data/types/PaymentType';

describe('PaymentOptionUserValue', () => {
  const paymentType: PaymentType = 'monthly';
  let setPaymentType: (value: string) => void;

  beforeEach(() => {
    setPaymentType = vi.fn();

    render(
      <MemoryRouter>
        <PaymentTypeToggle
          paymentType={paymentType}
          setPaymentType={setPaymentType}
        />
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
    test('should call setPaymentType with "monthly" when monthly button is clicked', async () => {
      const monthlyPaymentButton = await screen.findByTestId(
        'payment-type-monthly'
      );

      fireEvent.click(monthlyPaymentButton);

      await waitFor(() => {
        expect(setPaymentType).toHaveBeenCalledWith('monthly');
      });
    });

    test('should call setPaymentType when a button is clicked', async () => {
      const oneTimePaymentButton = await screen.findByTestId(
        'payment-type-one-time'
      );

      fireEvent.click(oneTimePaymentButton);

      await waitFor(() => {
        expect(setPaymentType).toHaveBeenCalledWith('oneTime');
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
