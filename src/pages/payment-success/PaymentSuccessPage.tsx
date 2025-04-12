import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import logo from '../../../favicon.ico';
import { Col, Row } from 'react-bootstrap';

const PaymentSuccessPage: React.FC = () => {
  return (
    <PageWrapper>
      <div>
        <Row>
          <Col>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: '100vh' }}
            >
              <div className="text-center">
                <img
                  data-testid="dr-logo"
                  src={logo}
                  height="250"
                  width="250"
                  className="mb-3 shadow-lg bg-white rounded p-3"
                />
                <h1 className="mb-3">Thank you for your donation.</h1>
                <p className="lead fs-2">
                  Your donation to <strong>Dream Renewables</strong> has been
                  successfully received.
                </p>
                <p className="fs-3">
                  Your support helps us continue empowering communities through
                  sustainable energy education and training.
                </p>
                <p className="fs-3">
                  We truly appreciate your generosity. You’re making a real
                  difference.
                </p>
                <a
                  className="fs-3 link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  href="/"
                >
                  Go back home
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </PageWrapper>
  );
};

export default PaymentSuccessPage;
