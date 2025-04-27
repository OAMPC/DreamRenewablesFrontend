import axios from 'axios';
import { PaymentType } from '../data/types/PaymentType';

export async function createCheckoutSession(
  amount: number,
  paymentType: PaymentType
): Promise<string> {
  try {
    const response = await axios.post<{ url: string }>(
      `${import.meta.env.VITE_BASE_SERVER_URL}/api/v1/create-checkout-session`,
      {
        paymentType,
        amountInPounds: amount,
        cancelUrl: window.location.pathname,
        currency: 'gbp',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.url;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}
