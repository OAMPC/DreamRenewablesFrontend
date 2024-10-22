import React from 'react';
import * as Bs from 'react-bootstrap';
import { PaymentOption } from '../../../../data/interfaces/util/PaymentOption';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import './paymentOptionStripeValue.scss';

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
          <p className="fs-1 fw-bold mb-0">£{paymentOption.amount}</p>
        </div>
        <Bs.Button className="payment-button">
          <Bs.Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Bs.Button>
      </div>
      <p className="ms-2 mt-3 fs-5">{paymentOption.description}</p>
    </>
  );
};

export default PaymentOptionStripeValue;
