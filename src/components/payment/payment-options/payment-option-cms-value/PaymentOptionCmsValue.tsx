import React from 'react';
import { PaymentOption } from '../../../../data/interfaces/util/PaymentOption';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../paymentOptionUtil.module.scss';
import { PaymentType } from '../../../../data/types/PaymentType';

type Props = {
  paymentOption: PaymentOption;
  paymentOptionIcon: ImageStrapiContent;
  paymentType: PaymentType;
};

const PaymentOptionCmsValue: React.FC<Props> = ({
  paymentOption,
  paymentOptionIcon,
  paymentType,
}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/gift-aid', {
      state: {
        paymentOption,
        paymentType,
        cancelUrl: window.location.pathname,
      },
    });
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
        >
          <Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
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
