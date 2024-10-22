import React from 'react';
import * as Bs from 'react-bootstrap';
import '../paymentOptionUtil.scss';
import './paymentOptionUserValue.scss';
import { ImageStrapiContent } from '../../../../data/interfaces/util/ImageStrapiContent';

type Props = {
  paymentOptionIcon: ImageStrapiContent;
};

const PaymentOptionUserValue: React.FC<Props> = ({ paymentOptionIcon }) => {
  return (
    <div data-testid="payment-option-user-value">
      <div className="payment-option-wrapper p-3 pb-0 d-flex align-items-center justify-content-between">
        <div>
          <Bs.Form>
            <Bs.InputGroup>
              <p className="fs-1 fw-bold">£</p>
              <Bs.Form.Control
                data-testid="payment-option-user-input"
                className="payment-option-form pt-0 mb-2"
                placeholder="Other"
                type="number"
              ></Bs.Form.Control>
            </Bs.InputGroup>
          </Bs.Form>
        </div>
        <Bs.Button
          data-testid="payment-option-user-input-button"
          className="payment-button mb-3"
        >
          <Bs.Image
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Bs.Button>
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
