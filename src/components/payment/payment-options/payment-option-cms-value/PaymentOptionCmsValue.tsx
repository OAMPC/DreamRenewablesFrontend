import React, { useState } from 'react';
import { PaymentOption } from '../../../../data/interfaces/util/PaymentOption';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import { Button, Image, Spinner } from 'react-bootstrap';
import styles from '../paymentOptionUtil.module.scss';
import { createCheckoutSession } from '../../../../api/paymentApi';
import { PaymentType } from '../../../../data/types/PaymentType';

type Props = {
  paymentOption: PaymentOption;
  paymentOptionIcon: ImageStrapiContent;
  paymentType: PaymentType;
  giftAidDonation: boolean;
};

const PaymentOptionCmsValue: React.FC<Props> = ({
  paymentOption,
  paymentOptionIcon,
  paymentType,
  giftAidDonation,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler = async () => {
    setIsLoading(true);
    try {
      const sessionUrl = await createCheckoutSession(
        paymentOption.amount,
        paymentType,
        giftAidDonation
      );
      window.location.href = sessionUrl;
    } catch (err) {
      console.error('Failed to create Stripe session:', err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className={`${styles.paymentOptionWrapper} p-3 d-flex align-items-center justify-content-between`}
      >
        <p data-testid="payment-option-cms-value" className="fs-1 fw-bold mb-0">
          £{paymentOption.amount}
        </p>

        <Button
          data-testid="payment-option-cms-button"
          className={styles.paymentButton}
          onClick={clickHandler}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              variant="dark"
            />
          ) : (
            <Image
              src={paymentOptionIcon.data.attributes.url}
              alt={paymentOptionIcon.data.attributes.alternativeText}
            />
          )}
        </Button>
      </div>
      <p
        data-testid="payment-option-cms-description"
        className="ms-2 mt-3 fs-5"
      >
        {paymentOption.description}
      </p>
    </>
  );
};

export default PaymentOptionCmsValue;
