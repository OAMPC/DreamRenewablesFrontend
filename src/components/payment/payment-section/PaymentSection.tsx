import React from 'react';
import PaymentTypeToggle from '../payment-type-toggle/PaymentTypeToggle';
import PaymentOptionStripeValue from '../payment-options/payment-option-stripe-value/PaymentOptionStripeValue';
import PaymentOptionUserValue from '../payment-options/payment-option-user-value/PaymentOptionUserValue';
import { PaymentSection as IPaymentSection } from '../../../data/interfaces/payment/PaymentSection';
import './paymentSection.scss';
import { Col, Row } from 'react-bootstrap';

type Props = {
  paymentData: IPaymentSection;
};

const PaymentSection: React.FC<Props> = ({ paymentData }) => {
  return (
    <div
      data-testid="payment-section"
      className="payment-section-container mt-5"
    >
      <Row>
        <Col>
          <div className="payment-title-wrapper d-flex justify-content-center mb-0">
            <h2
              data-testid="payment-section-main-title"
              className="payment-title fs-1 fw-bold"
            >
              {paymentData.title}
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="text-center">
          <p data-testid="payment-section-sub-title" className="fs-4">
            {paymentData.subTitle}
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <PaymentTypeToggle />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {paymentData.paymentOptions.map((paymentOption, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <PaymentOptionStripeValue
              paymentOption={paymentOption}
              paymentOptionIcon={paymentData.paymentOptionIcon}
            />
          </Col>
        ))}
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <PaymentOptionUserValue
            paymentOptionIcon={paymentData.paymentOptionIcon}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSection;
