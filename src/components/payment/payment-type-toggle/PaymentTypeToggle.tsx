import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styles from './paymentTypeToggle.module.scss';
import { PaymentType } from '../../../data/types/PaymentType';

type Props = {
  paymentType: PaymentType;
  setPaymentType: (value: PaymentType) => void;
};

const PaymentTypeToggle: React.FC<Props> = ({
  paymentType,
  setPaymentType,
}) => {
  return (
    <div data-testid="payment-type-toggle">
      <ButtonGroup data-testid="payment-type-button-group" size="lg">
        <Button
          className={styles.paymentToggleButton}
          data-testid="payment-type-monthly"
          onClick={() => setPaymentType('monthly')}
          active={paymentType === 'monthly'}
        >
          Monthly
        </Button>
        <Button
          className={styles.paymentToggleButton}
          data-testid="payment-type-one-time"
          onClick={() => setPaymentType('oneTime')}
          active={paymentType === 'oneTime'}
        >
          One-Time
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PaymentTypeToggle;
