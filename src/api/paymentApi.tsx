import axios from 'axios';

export async function createCheckoutSession(
  amount: number,
  isMonthly: boolean
): Promise<{
  data: {
    url: string;
  };
}> {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/create-checkout-session',
      {
        isMonthly,
        amount_in_pounds: amount,
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
    console.error('Error creating PaymentIntent:', error);
    throw error;
  }
}
