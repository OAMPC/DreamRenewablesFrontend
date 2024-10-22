import React, { useState } from 'react';
import * as Bs from 'react-bootstrap';
import './paymentTypeToggle.scss';

const PaymentTypeToggle: React.FC = () => {
  const [paymentType, setPaymentType] = useState('monthly');
  return (
    <>
      <Bs.ButtonGroup className="payment-type-toggle-wrapper" size="lg">
        <Bs.Button
          onClick={() => setPaymentType('monthly')}
          active={paymentType === 'monthly'}
        >
          Monthly
        </Bs.Button>
        <Bs.Button
          onClick={() => setPaymentType('oneTime')}
          active={paymentType === 'oneTime'}
        >
          One-Time
        </Bs.Button>
      </Bs.ButtonGroup>
    </>
  );
};

export default PaymentTypeToggle;
