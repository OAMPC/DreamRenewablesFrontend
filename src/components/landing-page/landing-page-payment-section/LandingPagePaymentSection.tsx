import React from 'react';
import * as Bs from 'react-bootstrap';
import { PaymentSection } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';
import './landingPagePaymentSection.scss';
import PaymentTypeToggle from '../../payment/payment-type-toggle/PaymentTypeToggle';

type Props = {
  paymentSection: PaymentSection;
};

const LandingPagePaymentSection: React.FC<Props> = ({ paymentSection }) => {
  return (
    <div className="payment-section-container mt-5">
      <Bs.Row>
        <Bs.Col>
          <div className="payment-title-wrapper d-flex justify-content-center mb-0">
            <h2 className="payment-title fs-1 fw-bold">
              {paymentSection.title}
            </h2>
          </div>
        </Bs.Col>
      </Bs.Row>
      <Bs.Row className="mb-4">
        <Bs.Col className="text-center">
          <p className="fs-4">{paymentSection.subTitle}</p>
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
            <div className="payment-option-wrapper p-3 d-flex align-items-center justify-content-between">
              <div>
                <p className="fs-1 fw-bold mb-0">£{paymentOption.amount}</p>
              </div>
              <Bs.Button variant="warning" className="payment-button">
                <Bs.Image
                  src={paymentSection.paymentOptionIcon.data.attributes.url}
                  alt={
                    paymentSection.paymentOptionIcon.data.attributes
                      .alternativeText
                  }
                />
              </Bs.Button>
            </div>
            <p className="ms-2 mt-3 fs-5 payment-description">
              {paymentOption.description}
            </p>
          </Bs.Col>
        ))}
        <Bs.Col xs={12} sm={6} md={4} lg={2} className="mb-4">
          <div className="payment-option-wrapper p-3 pb-0 d-flex align-items-center justify-content-between">
            <div>
              <Bs.Form>
                <Bs.InputGroup>
                  <p className="fs-1 fw-bold">£</p>
                  <Bs.Form.Control
                    className="payment-option-form pt-0 mb-2"
                    placeholder="Other"
                    type="number"
                  ></Bs.Form.Control>
                </Bs.InputGroup>
              </Bs.Form>
            </div>
            <Bs.Button variant="warning" className="payment-button mb-3">
              <Bs.Image
                src={paymentSection.paymentOptionIcon.data.attributes.url}
                alt={
                  paymentSection.paymentOptionIcon.data.attributes
                    .alternativeText
                }
              />
            </Bs.Button>
          </div>
          <p className="ms-2 mt-3 fs-5 payment-description">
            Choose your own impact
          </p>
        </Bs.Col>
      </Bs.Row>
    </div>
  );
};

export default LandingPagePaymentSection;
