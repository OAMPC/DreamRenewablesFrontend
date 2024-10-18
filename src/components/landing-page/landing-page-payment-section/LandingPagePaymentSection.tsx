import React from 'react';
import * as Bs from 'react-bootstrap';
import { PaymentSection } from '../../../data/interfaces/landing-page/LandingPageStrapiContent';

type Props = {
  paymentSection: PaymentSection;
};

const LandingPagePaymentSection: React.FC<Props> = ({ paymentSection }) => {
  return (
    <Bs.Row>
      <Bs.Col className="text-center">
        <h2 className="fs-1 fw-bold mb-5">{paymentSection.title}</h2>
      </Bs.Col>
    </Bs.Row>
  );
};

export default LandingPagePaymentSection;
