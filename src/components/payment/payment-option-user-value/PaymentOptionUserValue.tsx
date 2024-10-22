import React from 'react';
import * as Bs from 'react-bootstrap';
import './paymentOptionUserValue.scss';
import { ImageStrapiContent } from '../../../data/interfaces/util/ImageStrapiContent';

type Props = {
  paymentOptionIcon: ImageStrapiContent;
};

const PaymentOptionUserValue: React.FC<Props> = ({ paymentOptionIcon }) => {
  return (
    <>
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
            src={paymentOptionIcon.data.attributes.url}
            alt={paymentOptionIcon.data.attributes.alternativeText}
          />
        </Bs.Button>
      </div>
      <p className="ms-2 mt-3 fs-5 payment-description">
        Choose your own impact
      </p>
    </>
  );
};

export default PaymentOptionUserValue;