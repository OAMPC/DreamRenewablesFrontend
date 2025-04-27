import React, { useState } from 'react';
import { PaymentSection } from '../../../data/interfaces/payment/PaymentSection';
import { Col, Row } from 'react-bootstrap';
import PaymentTypeToggle from '../../payment/payment-type-toggle/PaymentTypeToggle';
import PaymentOptionUserValue from '../../payment/payment-options/payment-option-user-value/PaymentOptionUserValue';
import PaymentOptionStripeValue from '../../payment/payment-options/payment-option-stripe-value/PaymentOptionStripeValue';
import styles from './donatePagePaymentSection.module.scss';
import { PaymentType } from '../../../data/types/PaymentType';

type Props = {
  paymentStrapiData: PaymentSection;
};

const DonatePagePaymentSection: React.FC<Props> = ({ paymentStrapiData }) => {
  const [paymentType, setPaymentType] = useState<PaymentType>('monthly');
  return (
    <div
      data-testid="donate-page-payment-section"
      className={styles.paymentSectionWrapper + ' p-2 p-sm-5 mt-5 mt-sm-3'}
    >
      <Row>
        <Col>
          <div className="d-flex justify-content-center mb-0">
            <h2
              data-testid="donate-page-payment-section-main-title"
              className="fs-1 fw-bold text-center"
            >
              {paymentStrapiData.title}
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="">
          <p
            data-testid="donate-page-payment-section-sub-title"
            className="fs-4 text-center"
          >
            {paymentStrapiData.subTitle}
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <PaymentTypeToggle
            paymentType={paymentType}
            setPaymentType={setPaymentType}
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {paymentStrapiData.paymentOptions.map((paymentOption, index) => (
          <Col key={index} xs={12} className="mb-4">
            <PaymentOptionStripeValue
              paymentOption={paymentOption}
              paymentOptionIcon={paymentStrapiData.paymentOptionIcon}
              paymentType={paymentType}
            />
          </Col>
        ))}
        <Col xs={12} className="mb-4">
          <PaymentOptionUserValue
            paymentOptionIcon={paymentStrapiData.paymentOptionIcon}
            paymentType={paymentType}
          />
        </Col>
      </Row>
    </div>
  );
};

export default DonatePagePaymentSection;
