import axios from 'axios';
import { PaymentType } from '../data/types/PaymentType';

export async function emailCustomerStripeManagementUrl(
  email: string
): Promise<string> {
  try {
    const response = await axios.post<{ url: string }>(
      `${import.meta.env.VITE_BASE_SERVER_URL}/api/v1/email-customer-stripe-management-url`,
      {
        email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.url;
  } catch (error) {
    console.error('Error emailing customer stripe management url:', error);
    throw new Error('Failed to email customer stripe management url');
  }
}

export async function createCheckoutSession(
  amount: number,
  paymentType: PaymentType,
  giftAidDonation: boolean,
  cancelUrl: string
): Promise<string> {
  try {
    const response = await axios.post<{ url: string }>(
      `${import.meta.env.VITE_BASE_SERVER_URL}/api/v1/create-checkout-session`,
      {
        paymentType,
        amountInPounds: amount,
        cancelUrl,
        currency: 'gbp',
        giftAidDonation,
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
