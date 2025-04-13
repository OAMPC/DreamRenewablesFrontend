import React, { useState } from 'react';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import { InputGroup, Form, Button, Image } from 'react-bootstrap';
import styles from '../paymentOptionUtil.module.scss';
import { createCheckoutSession } from '../../../../api/paymentApi';
import { PaymentType } from '../../../../data/types/PaymentType';

type Props = {
  paymentOptionIcon: ImageStrapiContent;
  paymentType: PaymentType;
};

const PaymentOptionUserValue: React.FC<Props> = ({
  paymentOptionIcon,
  paymentType,
}) => {
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Regex: allow only numbers with up to 2 decimal places
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const validateAmount = (value: string): boolean => {
    const num = parseFloat(value);
    return !isNaN(num) && num >= 1;
  };

  const clickHandler = async () => {
    if (!validateAmount(amount)) {
      setError(
        'Please enter a valid amount (minimum £1, max 2 decimal places).'
      );
      return;
    }

    const formattedAmount = parseFloat(parseFloat(amount).toFixed(2));
    setError(null);
    setIsLoading(true);

    try {
      const sessionUrl = await createCheckoutSession(
        formattedAmount,
        paymentType
      );
      window.location.href = sessionUrl;
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div data-testid="payment-option-user-value">
      <div
        className={`${styles.paymentOptionWrapper} p-3 pb-0 d-flex align-items-center justify-content-between`}
      >
        <Form>
          <InputGroup>
            <p className="fs-1 fw-bold">£</p>
            <Form.Control
              data-testid="payment-option-user-input"
              className={`${styles.paymentOptionForm} pt-0 mb-2`}
              placeholder="Other"
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={handleChange}
              min={1}
              step="0.01"
            />
          </InputGroup>
          {error && <p className="text-danger mt-1">{error}</p>}
        </Form>
        <Button
          data-testid="payment-option-user-input-button"
          className={`${styles.paymentButton} mb-3`}
          onClick={clickHandler}
          disabled={isLoading}
        >
          <Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Button>
      </div>
      <p
        data-testid="payment-option-user-input-description"
        className="ms-2 mt-3 fs-5"
      >
        Choose your own impact
      </p>
    </div>
  );
};

export default PaymentOptionUserValue;
