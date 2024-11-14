import React from 'react';
import * as Bs from 'react-bootstrap';
import { PaymentSection } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import './landingPagePaymentSection.scss';
import PaymentTypeToggle from '../../payment/payment-type-toggle/PaymentTypeToggle';
import PaymentOptionStripeValue from '../../payment/payment-options/payment-option-stripe-value/PaymentOptionStripeValue';
import PaymentOptionUserValue from '../../payment/payment-options/payment-option-user-value/PaymentOptionUserValue';

type Props = {
  paymentSection: PaymentSection;
};

const LandingPagePaymentSection: React.FC<Props> = ({ paymentSection }) => {
  return (
    <div
      data-testid="landing-payment-section"
      className="payment-section-container mt-5"
    >
      <Bs.Row>
        <Bs.Col>
          <div className="payment-title-wrapper d-flex justify-content-center mb-0">
            <h2
              data-testid="payment-section-main-title"
              className="payment-title fs-1 fw-bold"
            >
              {paymentSection.title}
            </h2>
          </div>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-4">
        <Bs.Col className="text-center">
          <p data-testid="payment-section-sub-title" className="fs-4">
            {paymentSection.subTitle}
          </p>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-5">
        <Bs.Col className="text-center">
          <PaymentTypeToggle />
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="d-flex justify-content-center">
        {paymentSection.paymentOptions.map((paymentOption, index) => (
          <Bs.Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <PaymentOptionStripeValue
              paymentOption={paymentOption}
              paymentOptionIcon={paymentSection.paymentOptionIcon}
            />
          </Bs.Col>
        ))}
        <Bs.Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <PaymentOptionUserValue
            paymentOptionIcon={paymentSection.paymentOptionIcon}
          />
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPagePaymentSection;
