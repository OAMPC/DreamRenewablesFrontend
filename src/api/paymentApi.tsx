import axios from 'axios';

export async function createCheckoutSession(
  amount: number,
  isMonthly: boolean
): Promise<string> {
  try {
    const response = await axios.post<{ url: string }>(
      'http://127.0.0.1:8000/create-checkout-session',
      {
        isMonthly,
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
