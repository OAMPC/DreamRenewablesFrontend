import axios from 'axios';

export async function getClientSecret(amount: number): Promise<string> {
  try {
    const response = await axios.post(
      'http://127.0.0.1:3000/create-payment-intent',
      {
        amount,
        currency: 'gbp',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    throw error;
  }
}
