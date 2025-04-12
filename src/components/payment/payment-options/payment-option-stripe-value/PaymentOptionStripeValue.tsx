import React from 'react';
import { PaymentOption } from '../../../../data/interfaces/util/PaymentOption';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import { Button, Image } from 'react-bootstrap';
import styles from '../paymentOptionUtil.module.scss';
import { createCheckoutSession } from '../../../../api/paymentApi';

type Props = {
  paymentOption: PaymentOption;
  paymentOptionIcon: ImageStrapiContent;
};

const PaymentOptionStripeValue: React.FC<Props> = ({
  paymentOption,
  paymentOptionIcon,
}) => {
  const clickHandler = async () => {
    const secret = await createCheckoutSession(paymentOption.amount, false);
    console.log(secret);
  };

  return (
    <>
      <div
        className={`${styles.paymentOptionWrapper} p-3 d-flex align-items-center justify-content-between`}
      >
        <p
          data-testid="payment-option-stripe-value"
          className="fs-1 fw-bold mb-0"
        >
          £{paymentOption.amount}
        </p>

        <Button
          data-testid="payment-option-stripe-button"
          className={styles.paymentButton}
          onClick={clickHandler}
        >
          <Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Button>
      </div>
      <p
        data-testid="payment-option-stripe-description"
        className="ms-2 mt-3 fs-5"
      >
        {paymentOption.description}
      </p>
    </>
  );
};

export default PaymentOptionStripeValue;
