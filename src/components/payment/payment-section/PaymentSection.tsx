import React, { useState } from 'react';
import PaymentTypeToggle from '../payment-type-toggle/PaymentTypeToggle';
import PaymentOptionStripeValue from '../payment-options/payment-option-stripe-value/PaymentOptionStripeValue';
import PaymentOptionUserValue from '../payment-options/payment-option-user-value/PaymentOptionUserValue';
import { PaymentSection as IPaymentSection } from '../../../data/interfaces/payment/PaymentSection';
import { Col, Form, Row } from 'react-bootstrap';
import styles from './paymentSection.module.scss';
import { PaymentType } from '../../../data/types/PaymentType';

type Props = {
  paymentData: IPaymentSection;
};

const PaymentSection: React.FC<Props> = ({ paymentData }) => {
  const [paymentType, setPaymentType] = useState<PaymentType>('monthly');
  const [giftAidDonation, setGiftAidDonation] = useState<boolean>(false);
  return (
    <div data-testid="payment-section" className="p-5 my-5">
      <Row>
        <Col>
          <div
            className={`${styles.paymentTitleWrapper} d-flex justify-content-center mb-0`}
          >
            <h2
              data-testid="payment-section-main-title"
              className={`${styles.paymentTitle} fs-1 fw-bold`}
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
      <Row className="mb-4">
        <Col className="text-center">
          <PaymentTypeToggle
            paymentType={paymentType}
            setPaymentType={setPaymentType}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            id="gift-aid-checkbox"
            label="I am a UK taxpayer and I want Dream Renewables to claim Gift Aid on my donation"
            checked={giftAidDonation}
            onChange={() => setGiftAidDonation((prev) => !prev)}
            className={`${styles.giftAidCheckbox} fs-5`}
            data-testid="gift-aid-checkbox"
          />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {paymentData.paymentOptions.map((paymentOption, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
            <PaymentOptionStripeValue
              paymentOption={paymentOption}
              paymentOptionIcon={paymentData.paymentOptionIcon}
              paymentType={paymentType}
              giftAidDonation={giftAidDonation}
            />
          </Col>
        ))}
        <Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <PaymentOptionUserValue
            paymentOptionIcon={paymentData.paymentOptionIcon}
            paymentType={paymentType}
            giftAidDonation={giftAidDonation}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSection;
