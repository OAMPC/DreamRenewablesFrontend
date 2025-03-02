import React from 'react';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';
import { InputGroup, Form, Button, Image } from 'react-bootstrap';
import styles from '../paymentOptionUtil.module.scss';

type Props = {
  paymentOptionIcon: ImageStrapiContent;
};

const PaymentOptionUserValue: React.FC<Props> = ({ paymentOptionIcon }) => {
  return (
    <div data-testid="payment-option-user-value">
      <div
        className={`${styles.paymentOptionWrapper} p-3 pb-0 d-flex align-items-center justify-content-between`}
      >
        <div>
          <Form>
            <InputGroup>
              <p className="fs-1 fw-bold">£</p>
              <Form.Control
                data-testid="payment-option-user-input"
                className={`${styles.paymentOptionForm} pt-0 mb-2`}
                placeholder="Other"
                type="number"
              ></Form.Control>
            </InputGroup>
          </Form>
        </div>
        <Button
          data-testid="payment-option-user-input-button"
          className={`${styles.paymentButton} mb-3`}
        >
          <Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Button>
      </div>
      <p
        data-testid="payment-option-user-input-description"
        className="ms-2 mt-3 fs-5"
      >
        Choose your own impact
      </p>
    </div>
  );
};

export default PaymentOptionUserValue;
