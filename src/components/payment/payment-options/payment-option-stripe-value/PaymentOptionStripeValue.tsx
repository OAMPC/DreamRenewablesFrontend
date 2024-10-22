import React from 'react';
import * as Bs from 'react-bootstrap';
import { PaymentOption } from '../../../../data/interfaces/util/PaymentOption';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import '../paymentOptionUtil.scss';

type Props = {
  paymentOption: PaymentOption;
  paymentOptionIcon: ImageStrapiContent;
};

const PaymentOptionStripeValue: React.FC<Props> = ({
  paymentOption,
  paymentOptionIcon,
}) => {
  return (
    <>
      <div className="payment-option-wrapper p-3 d-flex align-items-center justify-content-between">
        <div>
          <p
            data-testid="payment-option-stripe-value"
            className="fs-1 fw-bold mb-0"
          >
            £{paymentOption.amount}
          </p>
        </div>
        <Bs.Button
          data-testid="payment-option-stripe-button"
          className="payment-button"
        >
          <Bs.Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Bs.Button>
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
